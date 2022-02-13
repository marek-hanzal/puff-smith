import {FC} from "react";

export interface IWattProps {
	watt?: number | null;
}

export const Watt: FC<IWattProps> = ({watt, ...props}) => {
	return <>{watt ? watt + 'W' : '-'}</>
}
