import prismaClient from "@/puff-smith/service/prisma";
import {UserService} from "@/puff-smith/service/user";
import {Logger} from "@leight-core/server";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GitHub from "next-auth/providers/github";

export default NextAuth({
	theme: {
		logo: "/logo.png",
		brandColor: "#1890ff",
		colorScheme: "light",
	},
	adapter: PrismaAdapter(prismaClient),
	session: {
		strategy: "jwt",
	},
	pages: {
		newUser: "/lab/welcome",
	},
	// debug: process.env.NODE_ENV === 'development',
	providers: [
		GitHub({
			name: "github",
			clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
			clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET,
		}),
		// https://next-auth.js.org/providers/email
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
	callbacks: {
		jwt: async ({token, isNewUser}) => {
			const logger = Logger("auth");
			logger.debug("Resolving JWT token", {isNewUser});
			const userService = UserService();
			if (token?.sub) {
				logger.debug("Token found with sub");
				const user = await userService.toMap(token.sub);
				if (isNewUser) {
					(await prismaClient.user.count()) === 1 ? await userService.handleRootUser(token.sub) : await userService.handleCommonUser(token.sub);
				}
				token.tokens = user.tokens.map(token => token.name);
				logger.debug("Resolved user with access tokens", {tokens: token.tokens});
			}
			return token;
		},
		session: async ({session, token}) => {
			if (session && token?.sub) {
				session.tokens = token.tokens;
			}
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
});
