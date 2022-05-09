import {IWire} from "@/puff-smith/service/wire/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IWireNameInlineProps extends Partial<SpaceProps> {
	wire: IWire;
}

export const WireNameInline: FC<IWireNameInlineProps> = ({wire, ...props}) => {
	return <Space {...props}>
		{wire.name}
		<Typography.Text type={"secondary"}>{wire.vendor.name}</Typography.Text>
	</Space>;
};
