import {
    BrowserPage,
    IBrowserPageProps
}           from "@leight-core/viv";
import {FC} from "react";

export interface IBrowserRootPageProps extends IBrowserPageProps {
}

export const BrowserRootPage: FC<IBrowserRootPageProps> = props => {
	return <BrowserPage {...props}/>;
};
