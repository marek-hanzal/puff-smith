import {bootstrap} from "@/puff-smith";
import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/leight";
import type {AppProps} from "next/app";
import {Router} from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function PuffSmith({Component, pageProps}: AppProps) {
	bootstrap();
	return ((Component as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>);
}
