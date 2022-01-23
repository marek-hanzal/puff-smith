import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {FC} from "react";
import {Typography} from "antd";

export interface IWireInlineProps {
	wire: WireDto;
}

export const WireInline: FC<IWireInlineProps> = ({wire}) => {
	return <>
		{wire.name}&nbsp;<Typography.Text type={'secondary'}>{wire.vendor.name}</Typography.Text><br/><Typography.Text type={'success'}>{(wire.ga ? wire.ga + 'GA' : null) || wire.description}</Typography.Text>
	</>;
}
