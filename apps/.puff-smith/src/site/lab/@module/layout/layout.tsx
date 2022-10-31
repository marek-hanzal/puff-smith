import {FullLogoIcon}         from "@/puff-smith/component/icon/FullLogoIcon";
import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer}               from "@/puff-smith/site/lab/@module/component/Footer";
import {Header}               from "@/puff-smith/site/lab/@module/component/Header";
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

export interface ILabLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const LabLayout: FC<ILabLayoutProps> = props => {
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

export function withLabLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			<NotificationProvider>
				<LabLayout>
					{children}
				</LabLayout>
			</NotificationProvider>
		</AppLayout>;
	};
	return Component;
}
