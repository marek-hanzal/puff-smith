import {env}               from "@/puff-smith/env/server.mjs";
import {prisma}            from "@/puff-smith/server/prisma/client";
import {Logger}            from "@leight/winston";
import {PrismaAdapter}     from "@next-auth/prisma-adapter";
import NextAuth            from "next-auth";
import type {Provider}     from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub              from "next-auth/providers/github";

const logger = Logger("auth");

const providers: Provider[] = [
    GitHub({
        name:         "github",
        clientId:     env.NEXTAUTH_GITHUB_CLIENT_ID,
        clientSecret: env.NEXTAUTH_GITHUB_CLIENT_SECRET,
    }),
    // Google({
    //     name:         "google",
    //     clientId:     env.NEXTAUTH_GOOGLE_CLIENT_ID,
    //     clientSecret: env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    // }),
];
env.NODE_ENV === "development" && providers.push(CredentialsProvider({
    name:        "Credentials",
    credentials: {
        secret: {label: "Dark Secret", type: "text"},
    },
    async authorize(credentials) {
        const {secret} = credentials || {};
        if (!secret) {
            return null;
        }
        return prisma.user.findUnique({
            where: {
                email: secret,
            }
        });
    }
}));

export default NextAuth({
    theme:     {
        logo:        "/logo.png",
        brandColor:  "#1890ff",
        colorScheme: "light",
    },
    events:    {
        signIn:  ({user}) => {
            logger.debug("User sign-in", {label: {userId: user.id}});
        },
        signOut: ({token: {sub}}) => {
            logger.debug("User sign-out", {label: {userId: sub}});
        },
    },
    adapter:   PrismaAdapter(prisma),
    session:   {
        strategy: "jwt",
    },
    pages:     {
        newUser: "/welcome",
    },
    providers,
    callbacks: {
        jwt:     async ({token, isNewUser}) => {
            try {
                logger.debug("Resolving JWT token", {isNewUser});
                // if (token?.sub) {
                //     logger.debug("Token found with sub");
                //     const userService = UserSource().withContainer(Container({
                //         user: User({
                //             userId: token.sub,
                //             tokens: ["*"],
                //         }),
                //     }));
                //     const user        = await userService.asUser(token.sub);
                //     if (isNewUser) {
                //         (await prisma.user.count()) === 1 ? await userService.handleRootUser() : await userService.handleCommonUser();
                //     }
                //     token.tokens = user.tokens;
                //     logger.debug("Resolved user with access tokens", {tokens: token.tokens});
                // }
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
                (session as any).withUser = {
                    userId: token.sub,
                    tokens: token.tokens,
                };
            }
            return session;
        },
    },
});
