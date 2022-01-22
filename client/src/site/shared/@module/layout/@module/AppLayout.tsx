import {App, createQueryClient, DayjsContextProvider, I18NextProvider, IAppProps, IPageWithLayout} from "@leight-core/leight";
import dayjs from "dayjs";
import i18next from "i18next";
import {FC} from "react";
import {FullLogoIcon} from "@/puff-smith";
import {useQueryPersistence} from "@leight-core/leight/dist";

const queryClient = createQueryClient();

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = props => {
	useQueryPersistence(queryClient, "puff-smith");

	return <I18NextProvider i18next={i18next}>
		<DayjsContextProvider dayjs={dayjs}>
			<App
				clientLink={process.env.NEXT_PUBLIC_PUBLIC_URL + "/puff-smith/client.json"}
				translationLink={"Edde.Shared.Translation"}
				sessionLink={"Edde.Shared.User.Ticket"}
				queryClient={queryClient}
				logo={<FullLogoIcon/>}
				{...props}
			/>
		</DayjsContextProvider>
	</I18NextProvider>;
};

export function withAppLayout(Component: FC<any>) {
	(Component as IPageWithLayout<any>).layout = children => {
		return <AppLayout>
			{children}
		</AppLayout>;
	};
	return Component;
}
