import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/api";
import type {AppProps} from "next/app";
import {BootstrapLoader} from "@leight-core/client";

export default function PuffSmith({Component, pageProps: {session, ...pageProps}}: AppProps) {
	return <BootstrapLoader session={session}>
		{((Component as unknown as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</BootstrapLoader>;
}
