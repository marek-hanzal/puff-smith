import "@/puff-smith/assets/styles/app.css";
import {IPageWithLayout} from "@leight-core/api";
import {BootstrapLoader} from "@leight-core/client";
import type {AppProps} from "next/app";

// export async function reportWebVitals(metric: NextWebVitalsMetric) {
// 	return MetricPushPromise({
// 		value: metric.value,
// 		name: metric.name,
// 		label: metric.label,
// 		reference: metric.id,
// 		start: metric.startTime
// 	});
// }

export default function PuffSmith({Component, pageProps: {session, ...pageProps}}: AppProps) {
	return <BootstrapLoader session={session}>
		{((Component as unknown as IPageWithLayout<any>).layout || (page => page))(<Component {...pageProps}/>)}
	</BootstrapLoader>;
}
