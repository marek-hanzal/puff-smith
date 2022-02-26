import {LogoIcon} from "@/puff-smith";
import {Footer, Header} from "../../index";
import {LockOutlined} from "@ant-design/icons";
import {HeaderSiderLayout, IPageWithLayout, LoaderLayout} from "@leight-core/common";
import {FC} from "react";
import {useSessionCheck} from "../../../shared/session";
import {AppLayout} from "../../../shared";

export interface IRootLayoutProps {
}

export const RootLayout: FC<IRootLayoutProps> = ({children}) => {
	const LayoutInternal = () => {
		const result = useSessionCheck();
		return <LoaderLayout
			logo={<LogoIcon/>}
			icon={<LockOutlined/>}
			queryResult={result}
			loading={!result.data?.user?.id}
			errorText={"public.unauthorized.title"}
		>
			<HeaderSiderLayout
				header={<Header/>}
				footer={<Footer/>}
			>
				{children}
			</HeaderSiderLayout>
		</LoaderLayout>;
	};

	return <AppLayout>
		<LayoutInternal/>
	</AppLayout>;
};

export function withRootLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <RootLayout>
			{children}
		</RootLayout>;
	};
	return Component;
}
