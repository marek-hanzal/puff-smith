import {Footer}          from "@/puff-smith/site/public/component/Footer";
import {Header}          from "@/puff-smith/site/public/component/Header";
import {AppLayout}       from "@/puff-smith/site/shared/@module/layout/@module/AppLayout";
import {IPageWithLayout} from "@leight-core/api";
import {
	ApplicationLayout,
	IApplicationLayoutProps
}                        from "@leight-core/client";
import {FC}              from "react";

export interface IPublicLayoutProps extends Partial<IApplicationLayoutProps> {
}

export const PublicLayout: FC<IPublicLayoutProps> = props => {
	return <AppLayout>
		<ApplicationLayout
			header={<Header/>}
			footer={<Footer/>}
			{...props}
		/>
	</AppLayout>;
};

export function withPublicLayout(Component: FC<any>) {
	(Component as unknown as IPageWithLayout<any>).layout = children => {
		return <PublicLayout>
			{children}
		</PublicLayout>;
	};
	return Component;
}
