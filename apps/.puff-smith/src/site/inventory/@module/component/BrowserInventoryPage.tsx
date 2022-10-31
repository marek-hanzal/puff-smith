import {
    BrowserPage,
    IBrowserPageProps
}           from "@leight-core/viv";
import {FC} from "react";

export interface IBrowserInventoryPageProps extends IBrowserPageProps {
}

/**
 * This page is the common page for all inventory related pages.
 */
export const BrowserInventoryPage: FC<IBrowserInventoryPageProps> = props => {
	return <BrowserPage {...props}/>;
};
