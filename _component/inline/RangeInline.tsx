import {FC} from "react";
import {toHumanNumber} from "@leight-core/utils";

export interface IRangeInlineProps {
	from?: number | null;
	to?: number | null;
}

export const RangeInline: FC<IRangeInlineProps> = ({from, to}) => {
	return <>
		{from && to && from === to && <span>={toHumanNumber(from, 2)}</span>}
		{from && to && from !== to && <span>{toHumanNumber(from, 2)}-{toHumanNumber(to, 2)}</span>}
		{from && !to && <span>{'>='}{toHumanNumber(from, 2)}</span>}
		{!from && to && <span>{'<='}{toHumanNumber(to, 2)}</span>}
		{!from && !to && '-'}
	</>
}
