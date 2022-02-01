import {ILiquidsSourceTableProps, LiquidsSourceTable} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC, useState} from "react";
import {LiquidCommentButton, LiquidFilter, LiquidInline, LiquidQuickMenu} from "@/puff-smith/site/lab/liquid";
import {List, Space} from "antd";
import {SmallPreview} from "@leight-core/leight/dist";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";

export interface ILiquidTableProps extends Partial<ILiquidsSourceTableProps> {
}

export const LiquidTable: FC<ILiquidTableProps> = props => {
	const [filter, setFilter] = useState<VapeFilterDto>();
	return <>
		<LiquidFilter
			filter={filter}
			onFilter={setFilter}
			onClear={() => setFilter({})}
		/>
		<LiquidsSourceTable
			filter={filter}
			listItemRender={liquid => <List.Item
				actions={[<LiquidQuickMenu key={'quick-menu'} liquid={liquid}/>]}
			>
				<Space direction={'vertical'}>
					<SmallPreview translation={'lab.liquid.table'}>
						{{
							'name': <LiquidInline liquid={liquid}/>,
							'pgvg': <>{liquid.pg}/{liquid.vg}</>,
						}}
					</SmallPreview>
					<LiquidCommentButton liquid={liquid}/>
				</Space>
			</List.Item>}
			{...props}
		>
			{({column}) => [
				column({
					key: "id",
					render: (_, liquid) => <LiquidQuickMenu liquid={liquid}/>,
					width: 0,
				}),
				column({
					key: "name",
					title: 'lab.liquid.table.name',
					render: (_, liquid) => <LiquidInline liquid={liquid}/>,
				}),
				column({
					key: "pgvg",
					title: "lab.liquid.table.pgvg",
					width: 140,
					render: (_, liquid) => <>{liquid.pg}/{liquid.vg}</>
				}),
			]}
		</LiquidsSourceTable>
	</>
}
