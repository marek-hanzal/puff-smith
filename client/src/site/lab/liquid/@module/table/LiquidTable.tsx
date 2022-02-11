import {ILiquidsSourceTableProps, LiquidsSourceTable} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {LiquidLinkButton, LiquidListItem, LiquidPreviewButton, LiquidQuickMenu} from "@/puff-smith/site/lab/liquid";
import {useOptionalFilterContext} from "@leight-core/leight";
import {LiquidFilterDto} from "@/sdk/puff-smith/liquid/dto";
import {useTranslation} from "react-i18next";
import {ButtonBar} from "@leight-core/leight/dist";

export interface ILiquidTableProps extends Partial<ILiquidsSourceTableProps> {
}

export const LiquidTable: FC<ILiquidTableProps> = props => {
	const filterContext = useOptionalFilterContext<LiquidFilterDto>();
	const {t} = useTranslation();
	return <LiquidsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.liquid.table.footer.label', {data: sourceContext?.result?.data})}
		listItemRender={liquid => <LiquidListItem liquid={liquid}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, liquid) => <ButtonBar>
					<LiquidLinkButton title={null} liquid={liquid}/>
					<LiquidQuickMenu liquid={liquid}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.liquid.table.name',
				render: (_, liquid) => <LiquidPreviewButton title={liquid.name} liquid={liquid}/>,
				sorter: true,
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
