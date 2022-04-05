import {isMatch} from "matcher";
import type {NextAuthMiddlewareOptions} from "next-auth/next/middleware";

export const withTokenAuth = (): NextAuthMiddlewareOptions => ({
	callbacks: {
		authorized: ({req, token}) => isMatch(req.page.name || "unknown", token?.tokens as string[] || []),
	}
});
