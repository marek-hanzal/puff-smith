import {HeaderSiderLayout} from "@leight-core/component";
import {FC} from "react";
import {AppLayout} from "@/puff-smith/site/shared";
import {Footer, Header} from "@/puff-smith/site/public";
import {IPageWithLayout} from "@leight-core/api";

export interface IPublicLayoutProps {
}

export const PublicLayout: FC<IPublicLayoutProps> = props => {
	return <AppLayout defaultCollapsed={false}>
		<HeaderSiderLayout
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
