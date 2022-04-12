import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/api";
import {BootstrapLoader} from "@leight-core/client";
import type {AppProps, NextWebVitalsMetric} from "next/app";

export function reportWebVitals(metric: NextWebVitalsMetric) {
	// console.log(metric);
	//
	// return (
	// 	(
	// 		navigator.sendBeacon
	// 		&& navigator.sendBeacon(VITALS_URL, body)
	// 	) || fetch(VITALS_URL, {
	// 		body,
	// 		method: 'POST',
	// 		keepalive: true,
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	})
	// );
}

export default function PuffSmith({Component, pageProps: {session, ...pageProps}}: AppProps) {
	return <BootstrapLoader session={session}>
		{((Component as unknown as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</BootstrapLoader>;
}
