import {IPageProps, Page, useSession} from "@leight-core/client";
import {FC} from "react";

export interface IRootPageProps extends IPageProps {
}

export const RootPage: FC<IRootPageProps> = props => {
	useSession({required: true});
	console.error("Implement ACL check for the user (must have a \"root\" or \"admin\" role).");
	return <Page {...props}/>;
};
