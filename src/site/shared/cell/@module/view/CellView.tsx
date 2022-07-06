import {Amps} from "@/puff-smith/component/inline/Amps";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {Volt} from "@/puff-smith/component/inline/Volt";
import {Tags} from "@/puff-smith/component/Tags";
import {ICell} from "@/puff-smith/service/cell/interface";
import {CellNameInline} from "@/puff-smith/site/shared/cell/@module/inline/CellNameInline";
import {Preview} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {FC} from "react";

export interface ICellViewProps {
	cell: ICell;
}

export const CellView: FC<ICellViewProps> = ({cell}) => {
	return <Preview
		name={"cell"}
		translation={"shared.cell.info"}
	>
		{[
			{
				name: "info",
				items: {
					name: <CellNameInline cell={cell}/>,
					code: <CodeInline code={cell}/>,
					type: <Tags tags={[cell.type]}/>,
					voltage: <Volt volt={cell.voltage}/>,
				},
			},
			{
				name: "more",
				items: {
					drain: <Amps amps={cell.drain}/>,
					capacity: toHumanNumber(cell.capacity),
					ohm: <Ohm ohm={cell.ohm} tooltip={"common.cell.ohm.tooltip"}/>,
					voltageMax: <Volt volt={cell.voltageMax}/>,
				},
			},
		]}
	</Preview>;
};
