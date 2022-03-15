import dayjs from "dayjs";
import i18next from "i18next";
import {FC} from "react";
import {FullLogoIcon} from "@/puff-smith";
import {App, createQueryClient, IAppProps, useQueryPersistence} from "@leight-core/client";
import {IPageWithLayout} from "@leight-core/api";
import {useTranslationsQuery} from "@/sdk/api/leight/shared/translation";

const queryClient = createQueryClient();

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = props => {
	console.log(useQueryPersistence(queryClient, "puff-smith") ? 'Cache enabled' : 'Cache disabled');
	return <App
		useTranslationQuery={useTranslationsQuery}
		queryClient={queryClient}
		logo={<FullLogoIcon/>}
		dayjs={dayjs}
		i18next={i18next}
		{...props}
	/>
};

export function withAppLayout(Component: FC<any>) {
	(Component as unknown as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			{children}
		</AppLayout>;
	};
	return Component;
}
