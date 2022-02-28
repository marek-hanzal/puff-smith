import {HeaderSiderLayout} from "@leight-core/component";
import {FC} from "react";
import {NotificationProvider} from "@/puff-smith";
import {IPageWithLayout} from "@leight-core/api";
import {Footer, Header, LabMenu} from "@/puff-smith/site/lab";
import {AppLayout} from "@/puff-smith/site/shared";

export interface ILabLayoutProps {
}

export const LabLayout: FC<ILabLayoutProps> = props => {
	return <AppLayout>
		<NotificationProvider>
			<HeaderSiderLayout
				header={<Header/>}
				footer={<Footer/>}
				menu={<LabMenu/>}
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
