import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {Typography} from "antd";
import {FC} from "react";

export interface ICottonInlineProps {
	cotton: CottonDto;
}

export const CottonInline: FC<ICottonInlineProps> = ({cotton}) => {
	return <>
		{cotton.name}&nbsp;<Typography.Text type={'secondary'}>{cotton.vendor.name}</Typography.Text>
	</>;
}
