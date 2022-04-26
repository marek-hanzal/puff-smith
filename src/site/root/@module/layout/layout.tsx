import {Footer} from "@/puff-smith/site/root/@module/component/Footer";
import {Header} from "@/puff-smith/site/root/@module/component/Header";
import {AppLayout} from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";

export interface IRootLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const RootLayout: FC<IRootLayoutProps> = props => {
	return <AppLayout>
		<ApplicationLayout
			header={<Header/>}
			footer={<Footer/>}
			{...props}
		/>
	</AppLayout>;
};

export function withRootLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <RootLayout>
			{children}
		</RootLayout>;
	};
	return Component;
}
