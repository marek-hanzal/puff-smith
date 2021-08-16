FROM node as client

WORKDIR /opt/client

ADD client .

RUN npm i && npm run build

FROM marekhanzal/buffalo as build

WORKDIR /opt/server

ADD . .
RUN \
	gradle --no-daemon build --warning-mode all && \
	mkdir -p dist && tar x --strip-components=1 -f build/distributions/*.tar -C dist && \
	rm dist/bin/*.bat && mv dist/bin/* dist/bin/app

FROM adoptopenjdk/openjdk16:alpine-jre

RUN apk add --update supervisor && rm  -rf /tmp/* /var/cache/apk/*

RUN adduser --disabled-password --home /opt/app app app

ADD rootfs/runtime /

COPY --from=client /opt/client/dist /opt/client
COPY --from=build /opt/server/dist /opt/server

RUN chown app:app -R /opt/app

RUN java -version

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
