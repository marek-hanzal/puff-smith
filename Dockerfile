FROM node:alpine as client-deps

WORKDIR /opt/client

COPY client/package.json client/package-lock.json ./
RUN npm install && npm ci --only-production

FROM node:alpine as client-builder

WORKDIR /opt/client

COPY client .
COPY --from=client-deps /opt/client/node_modules ./node_modules

RUN npm run build

FROM marekhanzal/buffalo as server-builder

WORKDIR /opt/server

COPY ./src ./src
COPY ./build.gradle.kts ./build.gradle.kts
COPY ./gradle.properties ./gradle.properties
COPY ./settings.gradle.kts ./settings.gradle.kts
RUN \
	gradle --no-daemon build --warning-mode all && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM adoptopenjdk/openjdk16:alpine-jre as runtime

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1

RUN adduser --disabled-password --home /opt/app app app
RUN chown app:app -R /opt/app

RUN apk add --update nodejs npm supervisor && rm  -rf /tmp/* /var/cache/apk/* && npm i -g npm

ADD rootfs/runtime /

WORKDIR /opt/app/client

COPY --from=client-builder --chown=app:app /opt/client/next.config.js ./next.config.js
COPY --from=client-builder --chown=app:app /opt/client/public ./public
COPY --from=client-builder --chown=app:app /opt/client/.next ./.next
COPY --from=client-builder --chown=app:app /opt/client/node_modules ./node_modules
COPY --from=client-builder --chown=app:app /opt/client/package.json ./package.json

WORKDIR /opt/app/server

COPY --from=server-builder --chown=app:app /opt/server/dist ./

RUN java -version

EXPOSE 3000

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
