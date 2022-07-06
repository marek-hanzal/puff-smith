import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonInventoryProviderControl, CottonInventorySourceSelect, ICottonInventorySourceSelectProps} from "@/sdk/api/inventory/cotton/query";
import {FC} from "react";

export interface ICottonSelectProps extends Partial<ICottonInventorySourceSelectProps> {
}

export const CottonSelect: FC<ICottonSelectProps> = props => {
	return <CottonInventoryProviderControl>
		<CottonInventorySourceSelect
			showSearch
			toId={cottonId => ({cottonId})}
			toOption={({cotton}) => ({
				value: cotton.id,
				label: <CottonNameInline cotton={cotton}/>,
			})}
			{...props}
		/>
	</CottonInventoryProviderControl>;
};
