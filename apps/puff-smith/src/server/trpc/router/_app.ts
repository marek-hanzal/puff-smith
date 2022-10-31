import {authRouter}    from "@/puff-smith/server/trpc/router/auth";
import {exampleRouter} from "@/puff-smith/server/trpc/router/example";
import {router}        from "@/puff-smith/server/trpc/trpc";

export const appRouter = router({
    example: exampleRouter,
    auth:    authRouter,
});

export type AppRouter = typeof appRouter;
