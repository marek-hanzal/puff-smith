import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import {prismaClient} from "@/puff-smith/service";

export default NextAuth({
	theme: {
		logo: '/logo.png',
		brandColor: '#1890ff',
		colorScheme: 'light',
	},
	adapter: PrismaAdapter(prismaClient),
	debug: process.env.NODE_ENV === 'development',
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
		jwt: ({token, user}) => {
			if (!user) {
				return token;
			}
			token.id = user.id;
			return token;
		},
		session: ({session, token}) => {
			if (!token) {
				return session;
			}
			session.id = token.id;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
})
