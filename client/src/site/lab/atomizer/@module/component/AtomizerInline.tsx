import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {Space, Typography} from "antd";

export interface IAtomizerInlineProps {
	atomizer: AtomizerDto;
}

export const AtomizerInline: FC<IAtomizerInlineProps> = ({atomizer}) => {
	return <Space>
		<span>{atomizer.name}</span>
		<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
	</Space>
}
