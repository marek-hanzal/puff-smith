import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {IWireInventorySourceSelectProps, WireInventorySourceSelect} from "@/sdk/api/inventory/wire/query";
import {FC} from "react";

export interface IWireSelectProps extends Partial<IWireInventorySourceSelectProps> {
}

export const WireSelect: FC<IWireSelectProps> = props => {
	return <WireInventorySourceSelect
		showSearch
		toOption={wireInventory => ({
			value: wireInventory.wireId,
			label: <WireNameInline wire={wireInventory.wire}/>,
		})}
		{...props}
	/>;
};
