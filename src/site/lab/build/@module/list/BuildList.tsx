import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {BuildListEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {usePatchMutation} from "@/sdk/api/lab/build/patch";
import {BuildListSource, IBuildListSourceProps, useBuildQueryInvalidate} from "@/sdk/api/lab/build/query";
import {LinkTo, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildListProps extends Partial<IBuildListSourceProps> {
}

export const BuildList: FC<IBuildListProps> = props => {
	const patchMutation = usePatchMutation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	return <BuildListSource
		locale={{
			emptyText: <BuildListEmpty/>,
		}}
		{...props}
	>
		{build => <ListItem
			key={build.id}
			extra={<LikeDislikeInline
				id={build.id}
				rating={build.rating}
				mutator={patchMutation}
				onSuccess={() => buildQueryInvalidate()}
			/>}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={build}/>
					<LinkTo href={"/lab/build/[buildId]"} query={{buildId: build.id}}>
						<AtomizerNameInline atomizer={build.atomizer}/>
					</LinkTo>
					<CodeInline code={build}/>
					<Ohm ohm={build.ohm}/>
					<LocalDate date={build.created}/>
				</Space>}
				description={<Space split={<Divider type={"vertical"}/>}>
					<CottonNameInline cotton={build.cotton}/>
					<WireNameInline wire={build.coil.wire}/>
					<WireFiberInline wire={build.coil.wire}/>
				</Space>}
			/>
		</ListItem>}
	</BuildListSource>;
};
