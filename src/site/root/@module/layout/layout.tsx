import {HeaderSiderLayout} from "@leight-core/client";
import {FC} from "react";
import {Footer, Header, RootMenu} from "@/puff-smith/site/root";
import {AppLayout} from "@/puff-smith/site/shared";
import {IPageWithLayout} from "@leight-core/api";

export interface IRootLayoutProps {
}

export const RootLayout: FC<IRootLayoutProps> = props => {
	return <AppLayout defaultCollapsed={false}>
		<HeaderSiderLayout
			header={<Header/>}
			footer={<Footer/>}
			menu={<RootMenu/>}
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
