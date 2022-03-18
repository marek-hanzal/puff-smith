import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";
import {AppLayout} from "@/puff-smith/site/shared";
import {Footer, Header} from "@/puff-smith/site/root";
import {IPageWithLayout} from "@leight-core/api";

export interface IRootLayoutProps extends Partial<IApplicationLayoutProps> {
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
