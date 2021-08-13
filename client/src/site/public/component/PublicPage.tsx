import {IPageProps, Page} from "@leight-core/leight";
import {FC} from "react";

export interface IPublicPageProps extends IPageProps {
}

export const PublicPage: FC<IPublicPageProps> = ({children, ...props}) => {
	return <Page {...props}>
		{children}
	</Page>;
};
