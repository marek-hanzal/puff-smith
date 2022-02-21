FROM node:16 as client-deps

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm ci

FROM node:16 as client-builder
ARG BASE_URL=/puff-smith
ARG BUILD=edge

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	BUILD=${BUILD}

WORKDIR /opt/client

COPY src src
COPY prisma prisma
COPY .env .env
COPY .eslintrc .eslintrc
COPY next.config.mjs next.config.mjs
COPY next-env.d.ts next-env.d.ts
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY --from=client-deps /opt/app/node_modules ./node_modules
RUN echo "NEXT_PUBLIC_BUILD=$BUILD" >> .env.local

RUN npx prisma generate
RUN npm run build

FROM alpine:3.15 as runtime

RUN \
    apk add --no-cache \
        nodejs curl wget supervisor && \
	rm -rf /var/cache/apk/*

ADD rootfs/runtime /

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

WORKDIR /opt/app

RUN addgroup app
RUN adduser --disabled-password --system --shell /bin/false --no-create-home --gecos "" --home /opt/app --ingroup app app

COPY --from=client-builder --chown=app:app /opt/client/next.config.mjs ./next.config.mjs
COPY --from=client-builder --chown=app:app /opt/client/prisma ./prisma
COPY --from=client-builder --chown=app:app /opt/client/public ./public
COPY --from=client-builder --chown=app:app /opt/client/.next ./.next
COPY --from=client-builder --chown=app:app /opt/client/node_modules ./node_modules
COPY --from=client-builder --chown=app:app /opt/client/package.json ./package.json
