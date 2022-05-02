import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer} from "@/puff-smith/site/lab/@module/component/Footer";
import {Header} from "@/puff-smith/site/lab/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";

export interface ILabLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const LabLayout: FC<ILabLayoutProps> = props => {
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

export function withLabLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <LabLayout>
			{children}
		</LabLayout>;
	};
	return Component;
}
