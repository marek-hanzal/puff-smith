import {Centered} from "@leight-core/common";
import {VersionStamp} from "@/puff-smith";
import {FC} from "react";

export interface IFooterProps {
}

export const Footer: FC<IFooterProps> = () => {
	return <Centered><VersionStamp/></Centered>;
};
