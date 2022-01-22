import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {Typography} from "antd";

export interface IAtomizerInlineProps {
	atomizer: AtomizerDto;
}

export const AtomizerInline: FC<IAtomizerInlineProps> = ({atomizer}) => {
	return <>
		{atomizer.name}&nbsp;<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
	</>
}
