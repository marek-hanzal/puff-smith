import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {FC} from "react";
import {Divider, Space, Tooltip, Typography} from "antd";

export interface IWireInlineProps {
	wire: WireDto;
}

export const WireInline: FC<IWireInlineProps> = ({wire}) => {
	return <Space size={0} split={<Divider type={'vertical'}/>}>
		<Typography.Text>
			<Tooltip title={wire.vendor.name}>
				{wire.name}
			</Tooltip>
		</Typography.Text>
		<Space>
			<Tooltip title={wire.description}>
				<Typography.Text>{wire.ga}</Typography.Text>
				<Typography.Text type={'secondary'}>GA</Typography.Text>
			</Tooltip>
		</Space>
	</Space>
}
