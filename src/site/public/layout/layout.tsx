import {Footer, Header} from "@/puff-smith/site/public";
import {AppLayout} from "@/puff-smith/site/shared";
import {IPageWithLayout} from "@leight-core/api";
import {ApplicationLayout, IApplicationLayoutProps} from "@leight-core/client";
import {FC} from "react";

export interface IPublicLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const PublicLayout: FC<IPublicLayoutProps> = props => {
	return <AppLayout defaultCollapsed={false}>
		<ApplicationLayout
			header={<Header/>}
			footer={<Footer/>}
			{...props}
		/>
	</AppLayout>;
};

export function withPublicLayout(Component: FC<any>) {
	(Component as unknown as IPageWithLayout<any>).layout = children => {
		return <PublicLayout>
			{children}
		</PublicLayout>;
	};
	return Component;
}
