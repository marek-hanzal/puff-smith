import {HeaderSiderLayout} from "@leight-core/common";
import {FC, useEffect} from "react";
import {NotificationProvider} from "@/puff-smith";
import {IPageWithLayout} from "@leight-core/api";
import {Footer, Header, LabMenu} from "@/puff-smith/site/lab";
import {AppLayout} from "@/puff-smith/site/shared";

export interface ILabLayoutProps {
}

export const LabLayout: FC<ILabLayoutProps> = props => {
	const LabLayoutInternal: FC = props => {
		/**
		 * Change a language from user session on startup! Yayks!
		 */
		useEffect(() => {
			// session?.user?.settings && session?.user?.settings?.language && i18n.changeLanguage(session.user.settings.language);
			// eslint-disable-next-line
		}, []);

		return <HeaderSiderLayout
			header={<Header/>}
			footer={<Footer/>}
			menu={<LabMenu/>}
			{...props}
		/>;
	};

	return <AppLayout>
		<NotificationProvider>
			<LabLayoutInternal {...props}/>
		</NotificationProvider>
	</AppLayout>;
};

export function withLabLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <LabLayout>
			{children}
		</LabLayout>;
	};
	return Component;
}
