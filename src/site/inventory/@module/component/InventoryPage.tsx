import {IPageProps, Page} from "@leight-core/client";
import {FC} from "react";

export interface IInventoryPageProps extends IPageProps {
}

/**
 * This page is the common page for all inventory related pages.
 */
export const InventoryPage: FC<IInventoryPageProps> = props => {
	return <Page {...props}/>;
};
