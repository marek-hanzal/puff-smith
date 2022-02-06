import {FC} from "react";
import {toHumanNumber} from "@leight-core/leight/dist";

export interface IOhmProps {
	ohm?: number | null;
}

export const Ohm: FC<IOhmProps> = ({ohm}) => {
	return <>{ohm ? toHumanNumber(ohm, 3) + 'ohm' : '-'}</>;
}
