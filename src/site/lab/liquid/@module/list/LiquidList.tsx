import {AgeOfInline, CodeInline, NicotineInline, PgVgInline, SelectionBool} from "@/puff-smith";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid";
import {LiquidNameInline, LiquidSteeping} from "@/puff-smith/site/shared/liquid";
import {ILiquidsListSourceProps, LiquidsListSource, useLiquidsOptionalSelectionContext} from "@/sdk/api/liquid/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ILiquidListProps extends Partial<ILiquidsListSourceProps> {
}

export const LiquidList: FC<ILiquidListProps> = props => {
	const selectionContext = useLiquidsOptionalSelectionContext();
	return <LiquidsListSource
		locale={{
			emptyText: <LiquidListEmpty/>
		}}
		{...props}
	>
		{liquid => <ListItem
			key={liquid.id}
			onClick={() => selectionContext?.item(liquid)}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={liquid}/>
					<LiquidNameInline liquid={liquid}/>
					<CodeInline code={liquid}/>
					<PgVgInline pgvg={liquid}/>
					<NicotineInline nicotine={liquid.nicotine} tooltip={"lab.liquid.nicotine.tooltip"}/>
					<AgeOfInline date={liquid.mixed} tooltip={"lab.liquid.age.tooltip"}/>
					<LiquidSteeping liquid={liquid}/>
				</Space>}
			/>
		</ListItem>}
	</LiquidsListSource>;
};
