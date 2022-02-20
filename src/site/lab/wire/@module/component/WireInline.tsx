import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {FC} from "react";
import {Divider, Space, Tooltip, Typography} from "antd";

export interface IWireInlineProps {
	wire: WireDto;
	withVendor?: boolean;
}

export const WireInline: FC<IWireInlineProps> = ({wire, withVendor = false}) => {
	return <Space size={0} split={<Divider type={'vertical'}/>}>
		<Typography.Text>
			<Tooltip title={wire.vendor.name}>
				{wire.name}
			</Tooltip>
		</Typography.Text>
		{withVendor && <Typography.Text type={'secondary'}>{wire.vendor.name}</Typography.Text>}
		<Space>
			<Tooltip title={wire.description}>
				<Typography.Text>{wire.ga}</Typography.Text>
				<Typography.Text type={'secondary'}>GA</Typography.Text>
			</Tooltip>
		</Space>
	</Space>
}
