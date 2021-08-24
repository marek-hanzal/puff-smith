import {Footer, Header, NotificationContextProvider} from "@/ps/site/user";
import {HeaderSiderLayout, IPageWithLayout} from "@leight-core/leight";
import {FC} from "react";

export interface IUserLayoutProps {
}

export const UserLayout: FC<IUserLayoutProps> = ({children}) => {
	return <NotificationContextProvider>
		<HeaderSiderLayout
			header={<Header/>}
			footer={<Footer/>}
		>
			{children}
		</HeaderSiderLayout>
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
