import {bootstrap, LogoFullIcon} from "@/ps";
import "@/ps/assets/styles/globals.css";
import {App, IPageWithLayout} from "@leight-core/leight";
import type {AppProps} from "next/app";

export default function ps({Component, pageProps}: AppProps) {
	bootstrap();
	return <App
		logo={<LogoFullIcon/>}
	>
		{((Component as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</App>;
}
