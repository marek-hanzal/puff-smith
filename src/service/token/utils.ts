import {isMatch} from "matcher";
import type {NextAuthMiddlewareOptions} from "next-auth/next/middleware";

export const withTokenAuth = (): NextAuthMiddlewareOptions => ({
	callbacks: {
		authorized: ({req: {nextUrl: {pathname}}, token}) => isMatch(pathname, token?.tokens as string[] || []),
	}
});
