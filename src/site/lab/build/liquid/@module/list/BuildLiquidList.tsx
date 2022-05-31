import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {DurationOf} from "@/puff-smith/component/inline/DurationOf";
import {LikeInline} from "@/puff-smith/component/inline/LikeInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {IBuild} from "@/puff-smith/service/build/interface";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {LiquidSteeping} from "@/puff-smith/site/shared/liquid/@module/inline/LiquidSteeping";
import {BuildLiquidListSource, IBuildLiquidListSourceProps, useBuildLiquidQueryInvalidate} from "@/sdk/api/lab/build/[id]/liquid/query";
import {useCreateMutation} from "@/sdk/api/lab/build/rating/create";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildLiquidListProps extends Partial<IBuildLiquidListSourceProps> {
	build: IBuild;
}

export const BuildLiquidList: FC<IBuildLiquidListProps> = ({build, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	const createMutation = useCreateMutation();
	const buildLiquidQueryInvalidate = useBuildLiquidQueryInvalidate();
	return <BuildLiquidListSource
		locale={{
			emptyText: <LiquidListEmpty/>,
		}}
		{...props}
	>
		{liquid => <ListItem
			key={liquid.id}
			extra={<LikeInline
				onDislike={() => {
					createMutation.mutate({
						rating: liquid.rating?.rating === -1 ? null : -1,
						buildId: build.id,
						liquidId: liquid.id,
					}, {
						onSuccess: async () => {
							await buildLiquidQueryInvalidate();
						}
					});
				}}
				onLike={() => {
					createMutation.mutate({
						rating: liquid.rating?.rating === 1 ? null : 1,
						buildId: build.id,
						liquidId: liquid.id,
					}, {
						onSuccess: async () => {
							await buildLiquidQueryInvalidate();
						}
					});
				}}
				onGodlike={() => {
					createMutation.mutate({
						rating: liquid.rating?.rating === 2 ? null : 2,
						buildId: build.id,
						liquidId: liquid.id,
					}, {
						onSuccess: async () => {
							await buildLiquidQueryInvalidate();
						}
					});
				}}
				isLoading={createMutation.isLoading}
				rating={liquid.rating?.rating}
			/>}
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
