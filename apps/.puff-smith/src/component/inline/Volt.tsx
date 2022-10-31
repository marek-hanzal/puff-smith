import {toHumanNumber} from "@leight-core/viv";
import {FC}            from "react";

export interface IVoltProps {
	volt?: number | null;
}

export const Volt: FC<IVoltProps> = ({volt}) => {
	return <>{volt ? toHumanNumber(volt, "-", 3) + "V" : "-"}</>;
};
