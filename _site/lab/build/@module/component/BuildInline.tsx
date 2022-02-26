import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, Space, Typography} from "antd";
import {AtomizerIcon, Ohm} from "@/puff-smith";
import {WireInline} from "../../../wire/@module/component/WireInline";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";

export interface IBuildInlineProps {
	build: BuildDto;
}

export const BuildInline: FC<IBuildInlineProps> = ({build}) => {
	return <Space direction={'vertical'}>
		<Space size={2} direction={'vertical'}>
			<Space>
				<Space size={2}>
					<AtomizerIcon/>
					<Typography.Text>{build.atomizer.name}</Typography.Text>
				</Space>
				<Typography.Text type={'secondary'}>{build.atomizer.vendor.name}</Typography.Text>
			</Space>
			<Space split={<Divider type={'vertical'}/>}>
				<Space size={2}>
					<CoilWraps wraps={build.coil.wraps}/>
				</Space>
				<Space size={2}>
					<CoilSize size={build.coil.size}/>
				</Space>
				<Space size={2}>
					<Ohm ohm={build?.ohm}/>
				</Space>
			</Space>
		</Space>
		<WireInline wire={build.coil.wire}/>
	</Space>
}
