import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer} from "@/puff-smith/site/market/@module/component/Footer";
import {Header} from "@/puff-smith/site/market/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps, User, UserProvider} from "@leight-core/client";
import {Spin} from "antd";
import {FC, PropsWithChildren} from "react";

type IMarketLayoutInternalProps = PropsWithChildren<{}>

const MarketLayoutInternal: FC<IMarketLayoutInternalProps> = ({children}) => {
	const whoamiQuery = useWhoamiQuery();
	return <UserProvider
		user={User(whoamiQuery.data as any)}
		isReady={whoamiQuery.isSuccess}
	>
		<Spin spinning={whoamiQuery.isLoading}>
			{children}
		</Spin>
	</UserProvider>;
};

export interface IMarketLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const MarketLayout: FC<IMarketLayoutProps> = ({children, ...props}) => {
	return <AppLayout>
		<NotificationProvider>
			<ApplicationLayout
				header={<Header/>}
				footer={<Footer/>}
				{...props}
			>
				<MarketLayoutInternal>
					{children}
				</MarketLayoutInternal>
			</ApplicationLayout>
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
