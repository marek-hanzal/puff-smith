import {toHumanNumber} from "@leight-core/utils";
import {FC} from "react";

export interface IRangeInlineProps {
	from?: number | null;
	to?: number | null;
}

export const RangeInline: FC<IRangeInlineProps> = ({from, to}) => {
	const max = 2;
	return <>
		{from && to && from === to && <span>={toHumanNumber(from, "-", max)}</span>}
		{from && to && from !== to && <span>{toHumanNumber(from, "-", max)}-{toHumanNumber(to, "-", max)}</span>}
		{from && !to && <span>{">="}{toHumanNumber(from, "-", max)}</span>}
		{!from && to && <span>{"<="}{toHumanNumber(to, "-", max)}</span>}
		{!from && !to && "-"}
	</>;
};
