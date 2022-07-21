import {IMobilePageProps, MobilePage} from "@leight-core/client";
import {FC} from "react";

export interface IMobilePublicPageProps extends IMobilePageProps {
}

export const MobilePublicPage: FC<IMobilePublicPageProps> = props => {
	return <MobilePage {...props}/>;
};
