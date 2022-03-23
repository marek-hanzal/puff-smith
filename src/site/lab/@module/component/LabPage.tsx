import {IPageProps, Page, useSession} from "@leight-core/client";
import {FC} from "react";

export interface ILabPageProps extends IPageProps {
}

/**
 * This page is the common page for all lab related pages.
 */
export const LabPage: FC<ILabPageProps> = props => {
	useSession({required: true});
	return <Page {...props}/>;
};
