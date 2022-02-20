FROM node:16 as client-deps

WORKDIR /opt/client

COPY client/package.json client/package-lock.json ./
RUN npm install

FROM node:16 as client-builder
ARG BASE_URL=/puff-smith
ARG BUILD=snapshot

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	BASE_URL=${BASE_URL} \
	BUILD=${BUILD}

WORKDIR /opt/client

COPY client .
COPY --from=client-deps /opt/client/node_modules ./node_modules
RUN echo "NEXT_PUBLIC_PUFF_SMITH=http://localhost:80" >> .env.local
RUN echo "NEXT_PUBLIC_BUILD=$BUILD" >> .env.local
RUN echo "NEXT_PUBLIC_PUBLIC_URL=" >> .env.local

RUN npx prisma generate
RUN npm run build

FROM marekhanzal/php:8.0 as server-deps

WORKDIR /opt/server
RUN php-enable-opcache
ADD composer.json .
ADD composer.lock .
RUN composer install

FROM marekhanzal/php:8.0 as runtime
ARG BASE_URL
ARG PHINX
ARG APP_KEY

ENV \
	MSAT_ENV=DEV \
	BASE_URL=${BASE_URL} \
	PHINX=${PHINX:-docker} \
	APP_KEY=${APP_KEY:-1234}

ADD rootfs/runtime /

WORKDIR /opt/app/client

COPY --from=client-builder --chown=www-data:www-data /opt/client/next.config.mjs ./next.config.mjs
COPY --from=client-builder --chown=www-data:www-data /opt/client/public ./public
COPY --from=client-builder --chown=www-data:www-data /opt/client/.next ./.next
COPY --from=client-builder --chown=www-data:www-data /opt/client/node_modules ./node_modules
COPY --from=client-builder --chown=www-data:www-data /opt/client/package.json ./package.json

WORKDIR /var/www/

COPY --from=server-deps --chown=www-data:www-data /opt/server/vendor vendor
COPY --from=client-builder --chown=www-data:www-data /opt/client/dist client/dist
COPY *.php .
COPY config config
COPY public public
COPY src src
COPY upgrade upgrade

EXPOSE 80

RUN mkdir .data && chmod 777 .data -R
RUN mkdir cache && chmod 777 cache -R
RUN mkdir logs && chmod 777 logs -R
RUN php-enable-opcache

WORKDIR /var/www
