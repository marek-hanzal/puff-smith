import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {AtomizerIcon, CoilIcon, Ohm} from "@/puff-smith";
import {ArrowsAltOutlined} from "@ant-design/icons";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";

export interface IBuildInlineProps {
	build: BuildDto;
}

export const BuildInline: FC<IBuildInlineProps> = ({build}) => {
	return <Space direction={'vertical'}>
		<Space size={2} direction={'vertical'}>
			<Space>
				<Space size={2}><AtomizerIcon/>{build.atomizer.name}</Space>
				<Typography.Text type={'secondary'}>{build.atomizer.vendor.name}</Typography.Text>
			</Space>
			<Space split={<Divider type={'vertical'}/>}>
				<Space size={2}>
					<CoilIcon/>{build.coil.wraps}
				</Space>
				<Space size={2}>
					{build.coil.size.toFixed(2)}<ArrowsAltOutlined/>
				</Space>
				<Space size={2}>
					<Ohm ohm={build?.ohm}/>
				</Space>
			</Space>
		</Space>
		<WireInline wire={build.coil.wire}/>
	</Space>
}
