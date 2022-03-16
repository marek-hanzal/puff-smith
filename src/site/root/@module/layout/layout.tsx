import React, {FC} from "react";
import {Footer, Header} from "@/puff-smith/site/root";
import {AppLayout} from "@/puff-smith/site/shared";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout} from "@leight-core/client";

export interface IRootLayoutProps {
}

export const RootLayout: FC<IRootLayoutProps> = props => {
	return <AppLayout defaultCollapsed={false}>
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
