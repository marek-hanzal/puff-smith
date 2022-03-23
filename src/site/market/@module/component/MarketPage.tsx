import {IPageProps, Page, useSession} from "@leight-core/client";
import {FC} from "react";

export interface IMarketPageProps extends IPageProps {
}

export const MarketPage: FC<IMarketPageProps> = props => {
	useSession({required: true});
	return <Page {...props}/>;
};
