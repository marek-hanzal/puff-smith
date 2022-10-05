import {VersionStamp} from "@/puff-smith/component/VersionStamp";
import {Centered}     from "@leight-core/client";
import {FC}           from "react";

export interface IFooterProps {
}

export const Footer: FC<IFooterProps> = () => {
	return <Centered><VersionStamp/></Centered>;
};
