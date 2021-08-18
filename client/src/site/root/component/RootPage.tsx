import {IPageProps, Page} from "@leight-core/leight";
import {FC} from "react";

export interface IRootPageProps extends IPageProps {
}

export const RootPage: FC<IRootPageProps> = ({children, ...props}) => {
	return <Page {...props}>
		{children}
	</Page>;
};
