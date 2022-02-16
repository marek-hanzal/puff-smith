import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Divider, Space, Tooltip, Typography} from "antd";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";

export interface ICoilInlineProps {
	coil: CoilDto;
}

export const CoilInline: FC<ICoilInlineProps> = ({coil}) => {
	return <Space size={0} split={<Divider type={'vertical'}/>}>
		<Typography.Text>
			<Tooltip title={coil.wire.vendor.name}>
				{coil.wire.name}
			</Tooltip>
		</Typography.Text>
		<Space>
			{coil.wire.ga && !coil.wire.description && <Typography.Text type={'secondary'}>{coil.wire.ga + 'GA'}</Typography.Text>}
			{coil.wire.ga && coil.wire.description && <Typography.Text type={'secondary'}>
				<Tooltip title={coil.wire.description}>
					{coil.wire.ga + 'GA'}
				</Tooltip>
			</Typography.Text>}
		</Space>
		<CoilWraps wraps={coil.wraps}/>
		<CoilSize size={coil.size}/>
	</Space>
}
