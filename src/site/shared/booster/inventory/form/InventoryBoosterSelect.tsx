import {PgVgInline} from "@/puff-smith";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {IInventoryBoostersSourceSelectProps, InventoryBoostersFilterProvider, InventoryBoostersSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoostersSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoostersFilterProvider>
		<InventoryBoostersSourceSelect
			showSearch
			allowClear
			toOption={booster => ({
				label: <Space>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<Typography.Text>{booster.nicotine}mg</Typography.Text>
				</Space>,
				value: booster.id,
			})}
			{...props}
		/>
	</InventoryBoostersFilterProvider>;
};
