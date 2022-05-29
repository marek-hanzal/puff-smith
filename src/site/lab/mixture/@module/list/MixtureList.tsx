import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {LiquidCreateButton} from "@/puff-smith/site/lab/mixture/@module/button/LiquidCreateButton";
import {MixtureListEmpty} from "@/puff-smith/site/lab/mixture/@module/list/MixtureListEmpty";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {IMixtureInventoryListSourceProps, MixtureInventoryListSource} from "@/sdk/api/inventory/mixture/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixtureInventoryListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixtureInventoryListSource
		locale={{
			emptyText: <MixtureListEmpty/>,
		}}
		{...props}
	>
		{mixture => <ListItem>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={mixture.aroma}/>
					<VgPgInline vgpg={mixture}/>
					<NicotineInline nicotine={mixture.nicotine}/>
					{mixture.aroma.tastes.length > 0 && <Tags color={"magenta"} tags={mixture.aroma.tastes} translation={"common.taste"}/>}
					{mixture.draws.length > 0 && <Tags tags={mixture.draws} color={"geekblue"} translation={"common.draw"}/>}
					<LiquidCreateButton mixture={mixture}/>
				</Space>}
				description={<MixtureInline hasBooster hasBase mixture={mixture}/>}
			/>
		</ListItem>}
	</MixtureInventoryListSource>;
};
