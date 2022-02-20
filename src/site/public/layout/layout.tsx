import {HeaderSiderLayout, IPageWithLayout} from "@leight-core/leight";
import {FC} from "react";
import {AppLayout} from "@/puff-smith/site/shared";
import {Footer, Header} from "@/puff-smith/site/public";

export interface IPublicLayoutProps {
}

export const PublicLayout: FC<IPublicLayoutProps> = ({children}) => {
	return <AppLayout defaultCollapsed={false}>
		<HeaderSiderLayout
			header={<Header/>}
			footer={<Footer/>}
		>
			{children}
		</HeaderSiderLayout>
	</AppLayout>;
};

export function withPublicLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <PublicLayout>
			{children}
		</PublicLayout>;
	};
	return Component;
}
