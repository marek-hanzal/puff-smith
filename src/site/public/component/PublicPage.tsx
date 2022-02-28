import {IPageProps, Page} from "@leight-core/component";
import {FC} from "react";

export interface IPublicPageProps extends IPageProps {
}

export const PublicPage: FC<IPublicPageProps> = props => {
	return <Page {...props}/>;
};
