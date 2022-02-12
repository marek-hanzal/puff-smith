import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {IPreviewProps, Preview, toHumanNumber} from "@leight-core/leight";
import {FC} from "react";
import {Ohm} from "@/puff-smith";
import {CellInline} from "@/puff-smith/site/lab/cell/@module/component/CellInline";

export interface ICellPreviewProps extends Partial<IPreviewProps> {
	cell: CellDto;
}

export const CellPreview: FC<ICellPreviewProps> = ({cell, ...props}) => {
	return <Preview translation={'lab.cell.preview'} {...props}>
		{{
			"name": <CellInline cell={cell}/>,
			"ohm": <Ohm ohm={cell.ohm}/>,
			"drain": cell.drain,
			"size": cell.size,
			"voltage": toHumanNumber(cell.voltage, 2),
		}}
	</Preview>
}
