import {LogoIcon} from "@/marsh";
import {App, DayjsContextProvider, I18NextProvider, IAppProps, IPageWithLayout} from "@leight-core/leight";
import dayjs from "dayjs";
import i18next from "i18next";
import {FC, useEffect} from "react";
import {QueryClient} from "react-query";
import {broadcastQueryClient} from "react-query/broadcastQueryClient-experimental";
import {createWebStoragePersistor} from "react-query/createWebStoragePersistor-experimental";
import {persistQueryClient} from "react-query/persistQueryClient-experimental";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 1000 * 60 * 60 * 24, //24h
		}
	}
});

export interface IAppLayoutProps extends Partial<IAppProps> {
}

export const AppLayout: FC<IAppLayoutProps> = props => {
	useEffect(() => {
		persistQueryClient({
			queryClient,
			persistor: createWebStoragePersistor({storage: window.localStorage}),
			buster: process.env.BUILD_ID,
		});
		broadcastQueryClient({
			queryClient,
			broadcastChannel: "marsh",
		});
	}, []);

	return <I18NextProvider i18next={i18next}>
		<DayjsContextProvider dayjs={dayjs}>
			<App
				clientLink={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blackfox/client.json"}
				translationLink={"Marsh.Shared.Translation"}
				sessionLink={"Marsh.Shared.User.Ticket"}
				queryClient={queryClient}
				logo={<LogoIcon/>}
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
