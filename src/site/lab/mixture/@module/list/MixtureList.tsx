import {Tags} from "@/puff-smith/component/Tags";
import {LiquidCreateButton} from "@/puff-smith/site/lab/mixture/@module/button/LiquidCreateButton";
import {MixtureListEmpty} from "@/puff-smith/site/lab/mixture/@module/list/MixtureListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {IMixtureListSourceProps, MixtureListSource} from "@/sdk/api/mixture/inventory/mixture/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixtureListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixtureListSource
		locale={{
			emptyText: <MixtureListEmpty/>,
		}}
		{...props}
	>
		{mixture => <ListItem>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={mixture.aroma}/>
					{mixture.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={mixture.aroma.tastes} translation={"common.taste"}/>}
					<LiquidCreateButton mixture={mixture}/>
				</Space>}
				description={<MixtureInline mixture={mixture}/>}
			/>
		</ListItem>}
	</MixtureListSource>;
};
