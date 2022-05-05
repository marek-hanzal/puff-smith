import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {LiquidSteeping} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidSteeping";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {ILiquidsListSourceProps, LiquidsListSource} from "@/sdk/api/liquid/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ILiquidListProps extends Partial<ILiquidsListSourceProps> {
}

export const LiquidList: FC<ILiquidListProps> = props => {
	return <LiquidsListSource
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
					<SelectionBool selection={liquid}/>
					<AromaNameInline aroma={liquid.mixture.aroma}/>
					<CodeInline code={liquid}/>
					<LiquidSteeping liquid={liquid}/>
					<AgeOfInline date={liquid.mixed} tooltip={"lab.liquid.age.tooltip"}/>
				</Space>}
				description={<Space size={0} split={<Divider type={"vertical"}/>}>
					<MixtureInline mixture={liquid.mixture}/>
				</Space>}
			/>
		</ListItem>}
	</LiquidsListSource>;
};
