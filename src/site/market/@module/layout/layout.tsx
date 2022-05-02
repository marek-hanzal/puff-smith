import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer} from "@/puff-smith/site/market/@module/component/Footer";
import {Header} from "@/puff-smith/site/market/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";

export interface IMarketLayoutProps extends Partial<IApplicationLayoutProps> {
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
