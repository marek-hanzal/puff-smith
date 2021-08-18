import {IPageProps, Page} from "@leight-core/leight";
import {FC} from "react";

export interface IUserPageProps extends IPageProps {
}

export const UserPage: FC<IUserPageProps> = ({children, ...props}) => {
	return <Page {...props}>
		{children}
	</Page>;
};
