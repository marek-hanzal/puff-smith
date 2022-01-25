import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Space, Typography} from "antd";

export interface IMixtureInlineProps {
	mixture: MixtureDto;
}

export const MixtureInline: FC<IMixtureInlineProps> = ({mixture}) => {
	return <Space direction={'vertical'}>
		<span>{mixture.name}</span>
		<Space>
			<span>{mixture.liquid.name}</span>
			<Typography.Text type={'secondary'}>{mixture.liquid.vendor.name}</Typography.Text>
		</Space>
		<Space>{mixture.nicotine}mg</Space>
	</Space>
}
