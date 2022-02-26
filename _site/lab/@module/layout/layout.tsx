import {HeaderSiderLayout, LoaderLayout} from "@leight-core/common";
import {FC, useEffect} from "react";
import {AppLayout, usePuffSmithSessionContext} from "../../../shared";
import {FullLogoIcon, NotificationProvider} from "@/puff-smith";
import {useSessionCheck} from "../../../shared/session";
import i18n from "i18next";
import {LockOutlined} from "@ant-design/icons";
import {Footer, Header, UserSettingsCheck} from "../component";
import {LabMenu} from "../menu";
import {IPageWithLayout} from "@leight-core/api";

export interface ILabLayoutProps {
}

export const LabLayout: FC<ILabLayoutProps> = ({children}) => {
	const LabLayoutInternal = () => {
		const {session} = usePuffSmithSessionContext();
		const result = useSessionCheck();
		/**
		 * Change a language from user session on startup! Yayks!
		 */
		useEffect(() => {
			session?.user?.settings && session?.user?.settings?.language && i18n.changeLanguage(session.user.settings.language);
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
				menu={<LabMenu/>}
			>
				<UserSettingsCheck>
					{children}
				</UserSettingsCheck>
			</HeaderSiderLayout>
		</LoaderLayout>;
	};

	return <AppLayout>
		<NotificationProvider>
			<LabLayoutInternal/>
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
