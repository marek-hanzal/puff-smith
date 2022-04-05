import {PgVgInline} from "@/puff-smith";
import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {IInventoryBasesSourceSelectProps, InventoryBasesFilterProvider, InventoryBasesSourceSelect} from "@/sdk/api/base/inventory/base/query";
import {Space} from "antd";
import {FC} from "react";

export interface IInventoryBaseSelectProps extends Partial<IInventoryBasesSourceSelectProps> {
}

export const InventoryBaseSelect: FC<IInventoryBaseSelectProps> = props => {
	return <InventoryBasesFilterProvider>
		<InventoryBasesSourceSelect
			showSearch
			allowClear
			toOption={base => ({
				label: <Space>
					<BaseNameInline base={base}/>
					<PgVgInline pgvg={base}/>
				</Space>,
				value: base.id,
			})}
			{...props}
		/>
	</InventoryBasesFilterProvider>;
};
