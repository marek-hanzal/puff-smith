import {LogoFullIcon, useSessionContext} from "@/ps";
import {Footer, Header, NotificationContextProvider} from "@/ps/site/user";
import {LockOutlined} from "@ant-design/icons";
import {HeaderSiderLayout, IPageWithLayout, LoaderLayout} from "@leight-core/leight";
import {FC} from "react";

export interface IUserLayoutProps {
}

export const UserLayout: FC<IUserLayoutProps> = ({children}) => {
	const {user} = useSessionContext().session;
	return <NotificationContextProvider>
		<LoaderLayout
			logo={<LogoFullIcon/>}
			icon={<LockOutlined/>}
			loading={false}
			error={!user.id}
			errorText={"public.unauthorized.title"}
		>
			<HeaderSiderLayout
				header={<Header/>}
				footer={<Footer/>}
			>
				{children}
			</HeaderSiderLayout>
		</LoaderLayout>
	</NotificationContextProvider>;
};

export function withUserLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <UserLayout>
			{children}
		</UserLayout>;
	};
	return Component;
}
