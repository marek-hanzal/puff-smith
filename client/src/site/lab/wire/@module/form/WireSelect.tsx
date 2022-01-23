import {IWiresSourceSelectProps, WiresSourceSelect} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Typography} from "antd";
import {WireInline} from "@/puff-smith/site/lab/wire";

export interface IWireSelectProps extends Partial<IWiresSourceSelectProps> {
}

export const WireSelect: FC<IWireSelectProps> = props => {
	return <WiresSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={wire => ({
			label: <WireInline wire={wire}/>,
			value: wire.id,
			...wire
		})}
		{...props}
	/>
}
