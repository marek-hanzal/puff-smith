import prismaClient from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {Logger} from "@leight-core/server";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GitHub from "next-auth/providers/github";

const logger = Logger("auth");

export default NextAuth({
	theme: {
		logo: "/logo.png",
		brandColor: "#1890ff",
		colorScheme: "light",
	},
	events: {
		signIn: ({user}) => {
			logger.debug("User sign-in", {label: {userId: user.id}});
		},
		signOut: ({token: {sub}}) => {
			logger.debug("User sign-out", {label: {userId: sub}});
		},
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
			logger.debug("Resolving JWT token", {isNewUser});
			if (token?.sub) {
				const userService = UserSource();
				userService.withUserId(token?.sub);
				logger.debug("Token found with sub");
				const user = await userService.get(token.sub);
				if (isNewUser) {
					(await prismaClient.user.count()) === 1 ? await userService.handleRootUser() : await userService.handleCommonUser();
				}
				token.tokens = user.UserToken.map(({token}) => token.name);
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
