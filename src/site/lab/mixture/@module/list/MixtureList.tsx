import {LiquidCreateButton} from "@/puff-smith/site/lab/mixture/@module/button/LiquidCreateButton";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/site/shared/mixture/@module/inline/MixtureInline";
import {IMixturesListSourceProps, MixturesListSource} from "@/sdk/api/mixture/inventory/mixture/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixturesListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixturesListSource
		{...props}
	>
		{mixture => <ListItem>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<AromaNameInline aroma={mixture.aroma}/>
					<LiquidCreateButton mixture={mixture}/>
				</Space>}
				description={<MixtureInline mixture={mixture}/>}
			/>
		</ListItem>}
	</MixturesListSource>;
};
