import {
    publicProcedure,
    router
} from "@/puff-smith/server/trpc/trpc";

export const authRouter = router({
    getSession: publicProcedure.query(() => {
        return null;
    }),
});
