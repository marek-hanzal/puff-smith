import {toHumanNumber} from "@leight-core/client";
import {FC} from "react";

export interface IWattProps {
	watt?: number | null;
}

export const Watt: FC<IWattProps> = ({watt}) => {
	return <>{watt ? toHumanNumber(watt, 3) + "W" : "-"}</>;
};
