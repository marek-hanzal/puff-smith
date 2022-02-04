import {HeaderSiderLayout, IPageWithLayout} from "@leight-core/leight";
import {FC} from "react";
import {AppLayout} from "@/puff-smith/site/shared";
import {Footer, Header} from "@/puff-smith/site/public";
import {useTranslation} from "react-i18next";

export interface IPublicLayoutProps {
}

export const PublicLayout: FC<IPublicLayoutProps> = ({children}) => {
	const {t} = useTranslation();
	return <AppLayout>
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
