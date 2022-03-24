import {IPageProps, Page, useSession} from "@leight-core/client";
import {FC} from "react";

export interface IRootPageProps extends IPageProps {
}

export const RootPage: FC<IRootPageProps> = props => {
	useSession({required: true});
	return <Page {...props}/>;
};
