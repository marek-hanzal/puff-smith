import {bootstrap, LogoIcon} from "@/vapers-dream";
import "@/vapers-dream/assets/styles/globals.css";
import {App, IPageWithLayout} from "@leight-core/leight";
import type {AppProps} from "next/app";

// noinspection JSUnusedGlobalSymbols
export default function VapersDream({Component, pageProps}: AppProps) {
	bootstrap();
	return <App
		icon={<LogoIcon style={{width: "10vw"}}/>}
	>
		{((Component as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</App>;
}
