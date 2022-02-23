import {App, createQueryClient, IAppProps, IPageWithLayout, useQueryPersistence} from "@leight-core/leight";
import dayjs from "dayjs";
import i18next from "i18next";
import {FC} from "react";
import {FullLogoIcon} from "@/puff-smith";

const queryClient = createQueryClient();

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = props => {
	console.log(useQueryPersistence(queryClient, "puff-smith") ? 'Cache enabled' : 'Cache disabled');
	return <App
		clientLink={"/api/client.json"}
		translationLink={"/api/shared/translation"}
		sessionLink={false}
		queryClient={queryClient}
		logo={<FullLogoIcon/>}
		dayjs={dayjs}
		i18next={i18next}
		{...props}
	/>
};

export function withAppLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			{children}
		</AppLayout>;
	};
	return Component;
}
