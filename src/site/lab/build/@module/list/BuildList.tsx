import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {BuildRatingButton} from "@/puff-smith/site/lab/build/@module/button/BuildRatingButton";
import {BuildListEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {BuildListSource, IBuildListSourceProps} from "@/sdk/api/lab/build/query";
import {LinkTo, ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildListProps extends Partial<IBuildListSourceProps> {
}

export const BuildList: FC<IBuildListProps> = props => {
	const selectionContext = useOptionalSelectionContext();
	return <BuildListSource
		locale={{
			emptyText: <BuildListEmpty/>,
		}}
		{...props}
	>
		{build => <ListItem
			key={build.id}
			extra={<BuildRatingButton build={build}/>}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={build}/>}
					<LinkTo href={"/lab/build/[buildId]"} query={{buildId: build.id}}>
						<AtomizerNameInline atomizer={build.atomizer}/>
					</LinkTo>
					<CodeInline code={build}/>
					<Ohm ohm={build.ohm}/>
					<LocalDate date={build.created}/>
				</Space>}
				description={<Space split={<Divider type={"vertical"}/>} size={0}>
					<CottonNameInline cotton={build.cotton}/>
					<WireNameInline wire={build.coil.wire}/>
					<WireFiberInline wire={build.coil.wire}/>
					{build.atomizer.draws.length > 0 && <Tags tags={build.atomizer.draws} translation={"common.draw"}/>}
				</Space>}
			/>
		</ListItem>}
	</BuildListSource>;
};
