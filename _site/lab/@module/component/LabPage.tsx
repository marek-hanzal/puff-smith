import {IPageProps, Page} from "@leight-core/common";
import {FC} from "react";

export interface ILabPageProps extends IPageProps {
}

/**
 * This page is the common page for all lab related pages.
 */
export const LabPage: FC<ILabPageProps> = props => {
	return <Page {...props}/>;
};
