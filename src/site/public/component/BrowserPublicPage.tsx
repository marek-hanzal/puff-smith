import {BrowserPage, IBrowserPageProps} from "@leight-core/client";
import {FC} from "react";

export interface IBrowserPublicPageProps extends IBrowserPageProps {
}

export const BrowserPublicPage: FC<IBrowserPublicPageProps> = props => {
	return <BrowserPage {...props}/>;
};
