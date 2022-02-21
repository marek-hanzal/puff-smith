FROM node:16 as client-deps

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install

FROM node:16 as client-builder
ARG BASE_URL=/puff-smith
ARG BUILD=edge

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	BUILD=${BUILD}

WORKDIR /opt/client

COPY . .
COPY --from=client-deps /opt/app/node_modules ./node_modules
RUN echo "NEXT_PUBLIC_BUILD=$BUILD" >> .env.local

RUN npx prisma generate
RUN npm run build

FROM debian as runtime

ENV \
    DEBIAN_FRONTEND=noninteractive

RUN \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        ca-certificates curl wget xz-utils zip unzip bzip2 re2c supervisor

RUN \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
      nodejs

RUN \
	apt-get clean autoclean && \
	apt-get autoremove --yes && \
	rm -rf /var/lib/{apt,dpkg,cache,log}/

RUN mkdir -p /etc/supervisor/conf.d

ADD rootfs/runtime /

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

WORKDIR /opt/app

COPY --from=client-builder --chown=www-data:www-data /opt/client/next.config.mjs ./next.config.mjs
COPY --from=client-builder --chown=www-data:www-data /opt/client/prisma ./prisma
COPY --from=client-builder --chown=www-data:www-data /opt/client/public ./public
COPY --from=client-builder --chown=www-data:www-data /opt/client/.next ./.next
COPY --from=client-builder --chown=www-data:www-data /opt/client/node_modules ./node_modules
COPY --from=client-builder --chown=www-data:www-data /opt/client/package.json ./package.json
