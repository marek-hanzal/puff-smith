import {IWiresSourceSelectProps, WiresSourceSelect} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Typography} from "antd";

export interface IWireSelectProps extends Partial<IWiresSourceSelectProps> {
}

export const WireSelect: FC<IWireSelectProps> = props => {
	return <WiresSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={wire => ({
			label: <>{wire.name}&nbsp;<Typography.Text type={'secondary'}>{wire.vendor.name}</Typography.Text><br/><Typography.Text type={'success'}>{(wire.ga ? wire.ga + 'GA' : null) || wire.description}</Typography.Text></>,
			value: wire.id,
			...wire
		})}
		{...props}
	/>
}
