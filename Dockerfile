FROM node:16 as client-deps

WORKDIR /opt/client

COPY client/package.json client/package-lock.json ./
RUN npm install

FROM node:16 as client-builder
ARG BASE_URL=/puff-smith
ARG BUILD=edge

ENV \
	NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	BUILD=${BUILD}

WORKDIR /opt/client

COPY client .
COPY --from=client-deps /opt/client/node_modules ./node_modules
RUN echo "NEXT_PUBLIC_PUFF_SMITH=http://localhost:80" >> .env.local
RUN echo "NEXT_PUBLIC_BUILD=$BUILD" >> .env.local
RUN echo "NEXT_PUBLIC_PUBLIC_URL=" >> .env.local

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

# copy from builder ....
