import {type DefaultSession} from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user?: {
                   userId: string;
                   tokens: string[];
               } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        tokens: string[];
    }
}
