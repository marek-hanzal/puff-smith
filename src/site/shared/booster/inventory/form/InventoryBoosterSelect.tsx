import {NicotineInline, PgVgInline} from "@/puff-smith";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {IInventoryBoostersSourceSelectProps, InventoryBoostersFilterProvider, InventoryBoostersOrderByProvider, InventoryBoostersSourceSelect} from "@/sdk/api/booster/inventory/booster/query";
import {Space} from "antd";
import {FC} from "react";

export interface IInventoryBoosterSelectProps extends Partial<IInventoryBoostersSourceSelectProps> {
}

export const InventoryBoosterSelect: FC<IInventoryBoosterSelectProps> = props => {
	return <InventoryBoostersFilterProvider>
		<InventoryBoostersOrderByProvider
			defaultOrderBy={{
				pg: "desc",
			}}
		>
			<InventoryBoostersSourceSelect
				showSearch
				allowClear
				toOption={booster => ({
					label: <Space>
						<BoosterNameInline booster={booster}/>
						<PgVgInline pgvg={booster}/>
						<NicotineInline nicotine={booster.nicotine}/>
					</Space>,
					value: booster.id,
				})}
				{...props}
			/>
		</InventoryBoostersOrderByProvider>
	</InventoryBoostersFilterProvider>;
};
