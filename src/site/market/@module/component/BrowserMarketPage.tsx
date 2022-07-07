import {BrowserPage, IBrowserPageProps} from "@leight-core/client";
import {FC} from "react";

export interface IBrowserMarketPageProps extends IBrowserPageProps {
}

export const BrowserMarketPage: FC<IBrowserMarketPageProps> = props => {
	return <BrowserPage {...props}/>;
};
