import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {useTranslationQuery} from "@/sdk/api/translation";
import {useVersionQuery} from "@/sdk/api/version";
import {IPageWithLayout} from "@leight-core/api";
import {App, createQueryClient, DeployRefreshManager, IAppProps, useQueryPersistence} from "@leight-core/client";
import dayjs from "dayjs";
import i18next from "i18next";
import {FC} from "react";

const queryClient = createQueryClient();

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = ({children, ...props}) => {
	console.log(useQueryPersistence(queryClient, "puff-smith") ? "Cache enabled" : "Cache disabled");
	return <App
		useTranslationQuery={useTranslationQuery}
		queryClient={queryClient}
		logo={<FullLogoIcon/>}
		dayjs={dayjs}
		i18next={i18next}
		{...props}
	>
		<DeployRefreshManager useVersionQuery={useVersionQuery}>
			{children}
		</DeployRefreshManager>
	</App>;
};

export function withAppLayout(Component: FC<any>) {
	(Component as unknown as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			{children}
		</AppLayout>;
	};
	return Component;
}
