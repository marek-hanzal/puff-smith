import "@/puff-smith/styles/globals.css";
import {trpc}             from "@/puff-smith/utils/trpc";
import type {ColorScheme} from "@mantine/core";
import {MantineProvider}  from "@mantine/core";
import type {AppProps}    from "next/app";
import Head               from "next/head";
import {useState}         from "react";

const PuffSmith = (props: AppProps & { colorScheme: ColorScheme }) => {
    const {Component, pageProps}        = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
    return <>
        <Head>
            <title>Puff Smith</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            {/*<link rel="shortcut icon" href="/favicon.svg" />*/}
        </Head>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: "light",
            }}
        >
            <Component {...pageProps} />
        </MantineProvider>
    </>;
};

export default trpc.withTRPC(PuffSmith);
