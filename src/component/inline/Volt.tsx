import {toHumanNumber} from "@leight-core/client";
import {FC} from "react";

export interface IVoltProps {
	volt?: number | null;
}

export const Volt: FC<IVoltProps> = ({volt}) => {
	return <>{volt ? toHumanNumber(volt, 2) + "V" : "-"}</>;
};
