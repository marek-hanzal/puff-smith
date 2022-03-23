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
		jwt: async ({token}) => {
			token?.sub && await UserService().fetch(token.sub);
			return token;
		},
		session: async ({session, token}) => {
			token?.sub && await UserService().fetch(token.sub);
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
})
