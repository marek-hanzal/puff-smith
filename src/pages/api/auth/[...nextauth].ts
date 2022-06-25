import prismaClient from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {Logger, User} from "@leight-core/server";
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
			try {
				logger.debug("Resolving JWT token", {isNewUser});
				if (token?.sub) {
					logger.debug("Token found with sub");
					const userService = UserSource().withUser(User({
						userId: token.sub,
						tokens: ["*"],
					}));
					const user = await userService.asUser(token.sub);
					if (isNewUser) {
						(await prismaClient.user.count()) === 1 ? await userService.handleRootUser() : await userService.handleCommonUser();
					}
					token.tokens = user.tokens;
					logger.debug("Resolved user with access tokens", {tokens: token.tokens});
				}
				return token;
			} catch (e) {
				if (e instanceof Error) {
					logger.error(e.message);
					logger.error(e.stack);
				}
				throw e;
			}
		},
		session: async ({session, token}) => {
			if (session && token?.sub) {
				session.withUser = {
					userId: token.sub,
					tokens: token.tokens,
				};
			}
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
});
