import "@/puff-smith/assets/styles/app.css";
import {
    BootstrapLoader,
    IPageWithLayout
}                      from "@leight-core/viv";
import "kothing-editor/dist/css/kothing-editor.min.css";
import type {AppProps} from "next/app";
import Head            from "next/head";

export default function PuffSmith({Component, pageProps}: AppProps) {
    return <BootstrapLoader>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        </Head>
        {((Component as unknown as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
    </BootstrapLoader>;
}
