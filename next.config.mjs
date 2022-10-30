// @ts-check
import { i18n } from './next-i18next.config';

!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify:       true,
    i18n,
};
export default config;
