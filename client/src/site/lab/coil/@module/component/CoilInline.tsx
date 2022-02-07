import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Divider, Space, Typography} from "antd";
import {isMobile} from "react-device-detect";
import {ArrowsAltOutlined, ReloadOutlined} from "@ant-design/icons";

export interface ICoilInlineProps {
	coil: CoilDto
	inline?: boolean
}

export const CoilInline: FC<ICoilInlineProps> = ({coil, inline}) => {
	inline = inline !== undefined ? inline : isMobile;
	return <Space direction={inline ? 'horizontal' : 'vertical'}>
		<Space direction={inline ? 'horizontal' : 'vertical'}>
			<Typography.Text>{coil.wire.name}</Typography.Text>
			<Typography.Text type={'secondary'}>{coil.wire.vendor.name}</Typography.Text>
		</Space>
		<Space split={<Divider type={'vertical'}/>}>
			<Space><span>{coil.wraps}</span><ReloadOutlined/></Space>
			<Space><span>{coil.size}</span><ArrowsAltOutlined/></Space>
		</Space>
		<Space>
			{(coil.wire.ga || coil.wire.description) && <Typography.Text type={'secondary'}>{(coil.wire.ga ? coil.wire.ga + 'GA' : null)} {coil.wire.description}</Typography.Text>}
		</Space>
	</Space>
}
