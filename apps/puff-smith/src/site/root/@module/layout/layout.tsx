import {FullLogoIcon}         from "@/puff-smith/component/icon/FullLogoIcon";
import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer}               from "@/puff-smith/site/root/@module/component/Footer";
import {Header}               from "@/puff-smith/site/root/@module/component/Header";
import {AppLayout}            from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {
	ApplicationLayout,
	IApplicationLayoutProps,
	IPageWithLayout,
	User,
	UserProvider,
	useSession
}                             from "@leight-core/viv";
import {FC}                   from "react";

export interface IRootLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const RootLayout: FC<IRootLayoutProps> = props => {
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

export function withRootLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			<NotificationProvider>
				<RootLayout>
					{children}
				</RootLayout>
			</NotificationProvider>
		</AppLayout>;
	};
	return Component;
}
