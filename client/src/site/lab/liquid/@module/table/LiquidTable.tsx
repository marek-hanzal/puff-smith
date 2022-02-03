import {ILiquidsSourceTableProps, LiquidsSourceTable} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {LiquidCommentButton, LiquidInline, LiquidLinkButton, LiquidQuickMenu} from "@/puff-smith/site/lab/liquid";
import {List, Space} from "antd";
import {SmallPreview, useOptionalFilterContext} from "@leight-core/leight";
import {LiquidFilterDto} from "@/sdk/puff-smith/liquid/dto";
import {useTranslation} from "react-i18next";

export interface ILiquidTableProps extends Partial<ILiquidsSourceTableProps> {
}

export const LiquidTable: FC<ILiquidTableProps> = props => {
	const filterContext = useOptionalFilterContext<LiquidFilterDto>();
	const {t} = useTranslation();
	return <LiquidsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.liquid.table.footer.label', {data: sourceContext?.result?.data})}
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
				render: (_, liquid) => <Space size={1}>
					<LiquidLinkButton title={null} liquid={liquid}/>
					<LiquidQuickMenu liquid={liquid}/>
				</Space>,
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
}
