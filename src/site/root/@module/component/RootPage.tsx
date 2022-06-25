import {IPageProps, Page} from "@leight-core/client";
import {FC} from "react";

export interface IRootPageProps extends IPageProps {
}

export const RootPage: FC<IRootPageProps> = props => {
	return <Page {...props}/>;
};
