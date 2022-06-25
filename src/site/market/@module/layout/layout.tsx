import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer} from "@/puff-smith/site/market/@module/component/Footer";
import {Header} from "@/puff-smith/site/market/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps, User, UserProvider, useSession} from "@leight-core/client";
import {FC} from "react";

export interface IMarketLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const MarketLayout: FC<IMarketLayoutProps> = props => {
	const session = useSession();
	return <UserProvider
		logo={<FullLogoIcon/>}
		user={User(session.data?.withUser)}
		isReady={session.isSuccess}
		block
	>
		<ApplicationLayout
			header={<Header/>}
			footer={<Footer/>}
			{...props}
		/>
	</UserProvider>;
};

export function withMarketLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			<NotificationProvider>
				<MarketLayout>
					{children}
				</MarketLayout>
			</NotificationProvider>
		</AppLayout>;
	};
	return Component;
}
