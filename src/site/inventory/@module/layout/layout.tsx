import {NotificationProvider} from "@/puff-smith/component/notification/NotificationProvider";
import {Footer} from "@/puff-smith/site/inventory/@module/component/Footer";
import {Header} from "@/puff-smith/site/inventory/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";

export interface IInventoryLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const InventoryLayout: FC<IInventoryLayoutProps> = props => {
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

export function withInventoryLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <InventoryLayout>
			{children}
		</InventoryLayout>;
	};
	return Component;
}
