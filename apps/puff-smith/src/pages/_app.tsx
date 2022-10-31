import "@/puff-smith/styles/globals.css";

import {trpc}         from "@/puff-smith/utils/trpc";
import {type AppType} from "next/app";

const PuffSmith: AppType = (
    {
        Component,
        pageProps,
    }) => {
    return <Component {...pageProps} />;
};

export default trpc.withTRPC(PuffSmith);
