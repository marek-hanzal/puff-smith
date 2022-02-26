import {IPageProps, Page} from "@leight-core/common";
import {FC} from "react";

export interface IRootPageProps extends IPageProps {
}

export const RootPage: FC<IRootPageProps> = props => {
	console.error("Implement ACL check for the user (must have a \"root\" or \"admin\" role).");
	return <Page {...props}/>;
};
