import {IWireFiberSourceSelectProps, WireFiberProviderControl, WireFiberSourceSelect} from "@/sdk/api/wire/market/fiber/query";
import {FC} from "react";

export interface IWireFiberSelectProps extends Partial<IWireFiberSourceSelectProps> {
}

export const WireFiberSelect: FC<IWireFiberSelectProps> = props => {
	return <WireFiberProviderControl>
		<WireFiberSourceSelect
			showSearch
			toOption={item => ({
				value: item.id,
				label: item.code,
			})}
			{...props}
		/>
	</WireFiberProviderControl>;
};
