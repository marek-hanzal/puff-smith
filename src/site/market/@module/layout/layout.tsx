import {NotificationProvider} from "@/puff-smith";
import {Footer, Header} from "@/puff-smith/site/market";
import {AppLayout} from "@/puff-smith/site/shared";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout} from "@leight-core/client";
import {FC} from "react";

export interface IMarketLayoutProps {
}

export const MarketLayout: FC<IMarketLayoutProps> = props => {
	return <AppLayout>
		<NotificationProvider>
			<ApplicationLayout
				header={<Header/>}
				footer={<Footer/>}
				{...props}
			/>
		</NotificationProvider>
	</AppLayout>;
};

export function withMarketLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <MarketLayout>
			{children}
		</MarketLayout>;
	};
	return Component;
}
