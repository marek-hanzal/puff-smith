import {bootstrap} from "@/puff-smith";
import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/api";
import type {AppProps} from "next/app";
import {Router} from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {ConfigProvider} from "antd";
import {useEffect, useState} from "react";
import {SessionProvider} from "next-auth/react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function PuffSmith({Component, pageProps: {session, ...pageProps}}: AppProps) {
	const [antd, setAntd] = useState<any>();

	useEffect(() => {
		(async () => setAntd((await bootstrap()).locale.antd))();
	}, []);

	return <SessionProvider session={session}>
		{antd ? <ConfigProvider locale={antd}>
			{((Component as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
		</ConfigProvider> : null}
	</SessionProvider>
}
