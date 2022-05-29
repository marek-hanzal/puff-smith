import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {BuildListEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {BuildListSource, IBuildListSourceProps} from "@/sdk/api/lab/build/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildListProps extends Partial<IBuildListSourceProps> {
}

export const BuildList: FC<IBuildListProps> = props => {
	return <BuildListSource
		locale={{
			emptyText: <BuildListEmpty/>,
		}}
		{...props}
	>
		{build => <ListItem
			key={build.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={build}/>
					<AtomizerNameInline atomizer={build.atomizer}/>
					<CodeInline code={build}/>
					<Ohm ohm={build.ohm}/>
					<LocalDate date={build.created}/>
				</Space>}
				description={<Space split={<Divider type={"vertical"}/>}>
					<WireNameInline wire={build.coil.wire}/>
					<WireFiberInline wire={build.coil.wire}/>
				</Space>}
			/>
		</ListItem>}
	</BuildListSource>;
};
