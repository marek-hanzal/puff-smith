import {LockOutlined} from "@ant-design/icons";
import {HeaderSiderLayout, IPageWithLayout, LoaderLayout} from "@leight-core/leight";
import i18n from "i18next";
import {FC, useEffect} from "react";
import {AppLayout, usePuffSmithSessionContext} from "@/puff-smith/site/shared";
import {useSessionCheck} from "@/puff-smith/site/shared/session";
import {FullLogoIcon, NotificationContextProvider} from "@/puff-smith";
import {Footer, Header} from "@/puff-smith/site/lab";

export interface ILabLayoutProps {
}

export const LabLayout: FC<ILabLayoutProps> = ({children}) => {
	const LayoutInternal = () => {
		const {user} = usePuffSmithSessionContext().session;
		const result = useSessionCheck();

		/**
		 * Change a language from user session on startup! Yayks!
		 */
		useEffect(() => {
			user.settings && user.settings.language && i18n.changeLanguage(user.settings.language);
			// eslint-disable-next-line
		}, []);

		return <LoaderLayout
			logo={<FullLogoIcon/>}
			icon={<LockOutlined/>}
			queryResult={result}
			loading={!result.data?.user?.id}
			errorText={"public.unauthorized.title"}
		>
			<HeaderSiderLayout
				header={<Header/>}
				footer={<Footer/>}
			>
				<UserSettingsCheck>
					{children}
				</UserSettingsCheck>
			</HeaderSiderLayout>
		</LoaderLayout>;
	};

	return <AppLayout>
		<NotificationContextProvider>
			<LayoutInternal/>
		</NotificationContextProvider>
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
