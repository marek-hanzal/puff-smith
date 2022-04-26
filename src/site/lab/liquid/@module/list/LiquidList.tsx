import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListEmpty";
import {LiquidNameInline} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidNameInline";
import {LiquidSteeping} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidSteeping";
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
