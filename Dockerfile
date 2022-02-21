FROM node:16 as dev-deps

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install

FROM node:16 as prod-deps

WORKDIR /opt/app

RUN curl -sf https://gobinaries.com/tj/node-prune | sh
COPY package.json package-lock.json ./
RUN \
	npm install modclean --save && \
	npm install --production && \
    node-prune && \
	npx modclean -n default:safe,default:caution

FROM node:16 as builder
ARG BUILD=edge

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	BUILD=${BUILD}

WORKDIR /opt/app

COPY src src
COPY prisma prisma
COPY public public
COPY .env .env
COPY .eslintrc .eslintrc
COPY next.config.mjs next.config.mjs
COPY next-env.d.ts next-env.d.ts
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY --from=dev-deps /opt/app/node_modules ./node_modules
RUN echo "NEXT_PUBLIC_BUILD=$BUILD" >> .env.local

RUN npx prisma generate
RUN npm run build

FROM alpine:3.15 as runtime

ENV \
	NODE_ENV=production

RUN \
    apk add --no-cache \
        nodejs curl wget supervisor && \
	rm -rf /var/cache/apk/*

ADD rootfs/runtime /

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

WORKDIR /opt/app

RUN addgroup app
RUN adduser --disabled-password --system --shell /bin/false --no-create-home --gecos "" --home /opt/app --ingroup app app

COPY --chown=app:app next.config.mjs next.config.mjs
COPY --chown=app:app prisma prisma
COPY --chown=app:app public public
COPY --chown=app:app package.json package-lock.json ./
COPY --from=prod-deps --chown=app:app /opt/app/node_modules ./node_modules
COPY --from=builder --chown=app:app /opt/app/.next ./.next

# du -sh ./node_modules/* | sort -nr | grep '\dM.*'
