import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Divider, Space, Typography} from "antd";
import {ArrowsAltOutlined, ReloadOutlined} from "@ant-design/icons";

export interface ICoilInlineProps {
	coil: CoilDto
}

export const CoilInline: FC<ICoilInlineProps> = ({coil}) => {
	return <Space direction={'vertical'}>
		<Space>
			<Typography.Text>{coil.wire.name}</Typography.Text>
			<Typography.Text type={'secondary'}>{coil.wire.vendor.name}</Typography.Text>
		</Space>
		<Space split={<Divider type={'vertical'}/>}>
			<Typography.Text type={'success'}>{coil.ohm.toFixed(2)}ohm</Typography.Text>
			<Space><span>{coil.wraps}</span><ReloadOutlined/></Space>
			<Space><span>{coil.size}</span><ArrowsAltOutlined/></Space>
		</Space>
		<Typography.Text type={'secondary'}>{(coil.wire.ga ? coil.wire.ga + 'GA' : null) || coil.wire.description}</Typography.Text>
	</Space>
}
