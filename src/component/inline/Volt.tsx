import {toHumanNumber} from "@leight-core/utils";
import {FC} from "react";

export interface IVoltProps {
	volt?: number | null;
}

export const Volt: FC<IVoltProps> = ({volt}) => {
	return <>{volt ? toHumanNumber(volt, "-", 3) + "V" : "-"}</>;
};
