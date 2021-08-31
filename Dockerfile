#FROM node:alpine as client-deps
#
#WORKDIR /opt/client
#
#COPY client/package.json client/package-lock.json ./
#RUN npm install && npm ci --only-production
#
FROM node:alpine as client-builder
ARG foo
ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	FOO=${foo:-pyca}

WORKDIR /opt/client

#COPY client .
#COPY --from=client-deps /opt/client/node_modules ./node_modules
RUN printenv
RUN echo -e "Build Version=$FOO"
RUN echo -e "NEXT_PUBLIC_BUILD=$FOO" > .env.local
#
#RUN npm run build
#
#FROM marekhanzal/buffalo as server-builder
#
#WORKDIR /opt/server
#
#COPY ./src ./src
#COPY ./build.gradle.kts ./build.gradle.kts
#COPY ./gradle.properties ./gradle.properties
#COPY ./settings.gradle.kts ./settings.gradle.kts
#RUN \
#	gradle --no-daemon build --warning-mode all && \
#	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
#	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app
#
#FROM adoptopenjdk/openjdk16:alpine-jre as runtime
#
#ENV \
#	NODE_ENV=production \
#	NEXT_TELEMETRY_DISABLED=1
#
#RUN adduser --disabled-password --home /opt/app app app
#
#RUN apk add --update nodejs npm supervisor && rm  -rf /tmp/* /var/cache/apk/* && npm i -g npm
#
#ADD rootfs/runtime /
#
#WORKDIR /opt/app
#RUN echo $VERSION > build
#
#WORKDIR /opt/app/client
#
#COPY --from=client-builder --chown=app:app /opt/client/next.config.js ./next.config.js
#COPY --from=client-builder --chown=app:app /opt/client/public ./public
#COPY --from=client-builder --chown=app:app /opt/client/.next ./.next
#COPY --from=client-builder --chown=app:app /opt/client/node_modules ./node_modules
#COPY --from=client-builder --chown=app:app /opt/client/package.json ./package.json
#
#WORKDIR /opt/app/server
#
#COPY --from=server-builder --chown=app:app /opt/server/dist ./
#
#RUN chown app:app -R /opt/app/server
#
## Client (Next.js app)
#EXPOSE 3000
## Backend Server
#EXPOSE 8088
#
#CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
