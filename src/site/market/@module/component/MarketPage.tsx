import {IPageProps, Page} from "@leight-core/client";
import {FC} from "react";

export interface IMarketPageProps extends IPageProps {
}

export const MarketPage: FC<IMarketPageProps> = props => {
	return <Page {...props}/>;
};
