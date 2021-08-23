import {Footer, Header} from "@/ps/site/root";
import {HeaderSiderLayout, IPageWithLayout} from "@leight-core/leight";
import {FC} from "react";

export interface IRootLayoutProps {
}

export const RootLayout: FC<IRootLayoutProps> = ({children}) => {
	return <HeaderSiderLayout
		header={<Header/>}
		footer={<Footer/>}
	>
		{children}
	</HeaderSiderLayout>;
};

export function withRootLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <RootLayout>
			{children}
		</RootLayout>;
	};
	return Component;
}
