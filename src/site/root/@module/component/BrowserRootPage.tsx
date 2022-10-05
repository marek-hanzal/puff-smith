import {
	BrowserPage,
	IBrowserPageProps
}           from "@leight-core/client";
import {FC} from "react";

export interface IBrowserRootPageProps extends IBrowserPageProps {
}

export const BrowserRootPage: FC<IBrowserRootPageProps> = props => {
	return <BrowserPage {...props}/>;
};
