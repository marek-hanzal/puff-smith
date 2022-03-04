import {FC} from "react";
import {toHumanNumber} from "@leight-core/utils";

export interface IVoltProps {
	volt?: number | null;
}

export const Volt: FC<IVoltProps> = ({volt}) => {
	return <>{volt ? toHumanNumber(volt, 2) + 'V' : '-'}</>
}