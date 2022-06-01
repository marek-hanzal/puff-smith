import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {DurationOf} from "@/puff-smith/component/inline/DurationOf";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {IBuild} from "@/puff-smith/service/build/interface";
import {RatingButton} from "@/puff-smith/site/lab/build/liquid/@module/button/RatingButton";
import {TasteRatingButton} from "@/puff-smith/site/lab/build/liquid/@module/button/TasteRatingButton";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {LiquidSteeping} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidSteeping";
import {BuildLiquidListSource, IBuildLiquidListSourceProps} from "@/sdk/api/lab/build/[id]/liquid/query";
import {ButtonBar, ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildLiquidListProps extends Partial<IBuildLiquidListSourceProps> {
	build: IBuild;
}

export const BuildLiquidList: FC<IBuildLiquidListProps> = ({build, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	return <BuildLiquidListSource
		locale={{
			emptyText: <LiquidListEmpty/>,
		}}
		{...props}
	>
		{liquid => <ListItem
			key={liquid.id}
			extra={<ButtonBar split={<Divider type={"vertical"}/>}>
				<RatingButton build={build} liquid={liquid}/>
				<TasteRatingButton
					disabled={!liquid.mixture.aroma.tastes.length}
					build={build}
					liquid={liquid}
				/>
			</ButtonBar>}
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
					{liquid.mixture.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={liquid.mixture.aroma.tastes} translation={"common.taste"}/>}
					{liquid.mixture.draws.length > 0 && <Tags tags={liquid.mixture.draws} color={"geekblue"} translation={"common.draw"}/>}
					{liquid.rating?.rating && <DurationOf tooltip={"lab.build.rating.duration.tooltip"} start={liquid.mixed} end={liquid.rating.created}/>}
				</Space>}
			/>
		</ListItem>}
	</BuildLiquidListSource>;
};
