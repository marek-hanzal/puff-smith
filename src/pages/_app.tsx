import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/api";
import {BootstrapLoader} from "@leight-core/client";
import "kothing-editor/dist/css/kothing-editor.min.css";
import type {AppProps} from "next/app";

export default function PuffSmith({Component, pageProps: {session, ...pageProps}}: AppProps) {
	return <BootstrapLoader session={session}>
		{((Component as unknown as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</BootstrapLoader>;
}
