import {
    publicProcedure,
    router
}          from "@/puff-smith/server/trpc/trpc";
import {z} from "zod";

export const exampleRouter = router({
    hello:  publicProcedure
                .input(z.object({text: z.string().nullish()}).nullish())
                .query(({input}) => {
                    return {
                        greeting: `Hello ${input?.text ?? "world"}`,
                    };
                }),
    getAll: publicProcedure.query(() => {
        return [];
    }),
});
