import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {LiquidSteeping} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidSteeping";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {ILiquidListSourceProps, LiquidListSource} from "@/sdk/api/lab/liquid/query";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ILiquidListProps extends Partial<ILiquidListSourceProps> {
}

export const LiquidList: FC<ILiquidListProps> = props => {
	const selectionContext = useOptionalSelectionContext();
	return <LiquidListSource
		locale={{
			emptyText: <LiquidListEmpty/>,
		}}
		{...props}
	>
		{liquid => <ListItem
			key={liquid.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={liquid}/>}
					<AromaNameInline aroma={liquid.mixture.aroma}/>
					<VgPgInline vgpg={liquid.mixture}/>
					<NicotineInline nicotine={liquid.mixture.nicotine}/>
					<CodeInline code={liquid}/>
					<LiquidSteeping liquid={liquid}/>
					<AgeOfInline date={liquid.mixed} tooltip={"lab.liquid.age.tooltip"}/>
				</Space>}
				description={<Space size={0} split={<Divider type={"vertical"}/>}>
					<MixtureInline mixture={liquid.mixture}/>
					{liquid.mixture.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={liquid.mixture.aroma.tastes} translation={"common.taste"}/>}
					{liquid.mixture.draws.length > 0 && <Tags tags={liquid.mixture.draws} color={"geekblue"} translation={"common.draw"}/>}
				</Space>}
			/>
		</ListItem>}
	</LiquidListSource>;
};
