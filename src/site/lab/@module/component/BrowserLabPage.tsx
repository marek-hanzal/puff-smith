import {
	BrowserPage,
	IBrowserPageProps
}           from "@leight-core/client";
import {FC} from "react";

export interface IBrowserLabPageProps extends IBrowserPageProps {
}

/**
 * This page is the common page for all lab related pages.
 */
export const BrowserLabPage: FC<IBrowserLabPageProps> = props => {
	return <BrowserPage {...props}/>;
};
