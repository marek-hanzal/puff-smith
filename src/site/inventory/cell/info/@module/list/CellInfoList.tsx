import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {Volt} from "@/puff-smith/component/inline/Volt";
import {CellInfoListSource, ICellInfoListSourceProps} from "@/sdk/api/cell/info/query";
import {ToolOutlined} from "@ant-design/icons";
import {ListItem, ListItemMeta, Template} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Divider, Progress, Space} from "antd";
import {FC} from "react";

export interface ICellInfoListProps extends Partial<ICellInfoListSourceProps> {
}

export const CellInfoList: FC<ICellInfoListProps> = props => {
	return <CellInfoListSource
		emptyText={<Template
			icon={<ToolOutlined/>}
			label={"inventory.cell.info.list.empty"}
		/>}
		{...props}
	>
		{cellInfo => <ListItem
			key={cellInfo.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>} size={4}>
					<Volt volt={cellInfo.voltage}/>
					{toHumanNumber(cellInfo.capacity)}
					<AgeOfInline date={cellInfo.created} tooltip={"inventory.cell.info.age.tooltip"}/>
				</Space>}
				description={cellInfo.health && <Progress
					format={percent => toHumanNumber(percent, "", 2) + "%"}
					percent={cellInfo.health}
				/>}
			/>
		</ListItem>}
	</CellInfoListSource>;
};
