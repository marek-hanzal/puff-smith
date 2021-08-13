import {Footer, Header} from "@/vapers-dream/site/public";
import {HeaderSiderLayout, IPageWithLayout} from "@leight-core/leight";
import {FC} from "react";

export interface IPublicLayoutProps {
}

export const PublicLayout: FC<IPublicLayoutProps> = ({children}) => {
	return <HeaderSiderLayout
		header={<Header/>}
		footer={<Footer/>}
	>
		{children}
	</HeaderSiderLayout>;
};

export function withPublicLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <PublicLayout>
			{children}
		</PublicLayout>;
	};
	return Component;
}
