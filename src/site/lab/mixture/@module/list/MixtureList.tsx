import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {IMixturesListSourceProps, MixturesListSource} from "@/sdk/api/mixture/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IMixtureListProps extends Partial<IMixturesListSourceProps> {
}

export const MixtureList: FC<IMixtureListProps> = props => {
	return <MixturesListSource
		{...props}
	>
		{mixture => <ListItem>
			<ListItemMeta
				title={<Space>
					{mixture.aroma.name}
				</Space>}
				description={<Space split={<Divider type={"vertical"}/>}>
					<PgVgInline pgvg={mixture}/>
					<NicotineInline nicotine={mixture.nicotine}/>
					{mixture.aroma && <AromaNameInline aroma={mixture.aroma}/>}
					{mixture.booster && <Space size={4} split={"-"}>
						<Typography.Text>{mixture.boosterCount}x</Typography.Text>
						<BoosterNameInline booster={mixture.booster}/>
					</Space>}
					{mixture.base && <Space size={4} split={"-"}>
						<Typography.Text>{mixture.baseMl}ml</Typography.Text>
						<BaseNameInline base={mixture.base}/>
					</Space>}
				</Space>}
			/>
		</ListItem>}
	</MixturesListSource>;
};
