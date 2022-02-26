import NextAuth from "next-auth"
import {createPrismaClient} from "@/puff-smith/prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = createPrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'credential',
			credentials: {
				username: {
					label: 'Email',
					type: 'text',
					placeholder: 'john.doe@example.com',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			authorize: credentials => {
				/**
				 * @TODO prisma lookup here
				 */
				return credentials?.username === 'test' && credentials?.password === '1234' ? {
					id: '1234',
					name: 'test',
					email: 'test@example.com',
				} : null;
			},
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
	/**
	 * @TODO take a secret from ENV
	 */
	secret: '1234',
	jwt: {
		secret: '1234',
	},
})
