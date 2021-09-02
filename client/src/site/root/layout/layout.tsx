import {LogoFullIcon, useSessionContext} from "@/ps";
import {Footer, Header} from "@/ps/site/root";
import {LockOutlined} from "@ant-design/icons";
import {HeaderSiderLayout, IPageWithLayout, LoaderLayout} from "@leight-core/leight";
import {FC} from "react";

export interface IRootLayoutProps {
}

export const RootLayout: FC<IRootLayoutProps> = ({children}) => {
	const {user} = useSessionContext().session;
	return <>
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
	</>;
};

export function withRootLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <RootLayout>
			{children}
		</RootLayout>;
	};
	return Component;
}
