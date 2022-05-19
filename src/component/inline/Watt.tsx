import {toHumanNumber} from "@leight-core/utils";
import {FC} from "react";

export interface IWattProps {
	watt?: number | null;
}

export const Watt: FC<IWattProps> = ({watt}) => {
	return <>{watt ? toHumanNumber(watt, "-", 3) + "W" : "-"}</>;
};
