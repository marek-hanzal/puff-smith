import {App, createQueryClient, IAppProps, IPageWithLayout} from "@leight-core/leight";
import dayjs from "dayjs";
import i18next from "i18next";
import {FC} from "react";
import {FullLogoIcon} from "@/puff-smith";

const queryClient = createQueryClient();

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = props => {
	// useQueryPersistence(queryClient, "puff-smith");
	return <App
		clientLink={process.env.NEXT_PUBLIC_PUBLIC_URL + "/puff-smith/client.json"}
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
