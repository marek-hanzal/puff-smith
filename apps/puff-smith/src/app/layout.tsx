import "@/puff-smith/styles/globals.css";
import Head                     from "next/head";
import type {PropsWithChildren} from "react";

export default function AppLayout(
    {
        children,
    }: PropsWithChildren) {
    return (
        <html>
            <Head>
                <title>Puff Smith</title>
            </Head>
            <body
                className={"bg-white dark:bg-gray-900"}
            >
                {children}
            </body>
        </html>
    );
}
