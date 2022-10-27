import {VersionStamp} from "@/puff-smith/component/VersionStamp";
import {Centered}     from "@leight-core/viv";
import {FC}           from "react";

export interface IFooterProps {
}

export const Footer: FC<IFooterProps> = () => {
	return <Centered><VersionStamp/></Centered>;
};
