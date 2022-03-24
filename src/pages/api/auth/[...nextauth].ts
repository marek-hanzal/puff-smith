import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import prismaClient from "@/puff-smith/service/prisma";
import {UserService} from "@/puff-smith/service/user";

export default NextAuth({
	theme: {
		logo: '/logo.png',
		brandColor: '#1890ff',
		colorScheme: 'light',
	},
	adapter: PrismaAdapter(prismaClient),
	session: {
		strategy: 'jwt',
	},
	pages: {
		newUser: '/lab/welcome',
	},
	// debug: process.env.NODE_ENV === 'development',
	providers: [
		GitHub({
			name: 'github',
			clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
			clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET,
		}),

		// https://next-auth.js.org/providers/google
		// https://console.developers.google.com/apis/credentials?project=puff-smith&supportedpurview=project
	],
	callbacks: {
		jwt: async ({token, isNewUser}) => {
			const userService = UserService();
			if (token?.sub) {
				const user = await userService.toMap(token.sub);
				if (isNewUser) {
					(await prismaClient.user.count()) === 1 ? await userService.handleRootUser(token.sub) : await userService.handleCommonUser(token.sub);
				}
				token.tokens = user.tokens.map(token => token.name);
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
})
