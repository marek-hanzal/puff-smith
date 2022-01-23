import {BaseDto} from "@/sdk/puff-smith/base/dto";
import {FC} from "react";
import {Typography} from "antd";

export interface IBaseInlineProps {
	base: BaseDto
}

export const BaseInline: FC<IBaseInlineProps> = ({base}) => {
	return <>
		{base.name}&nbsp;<Typography.Text type={'secondary'}>{base.vendor.name}</Typography.Text><br/>
		{base.pg}/{base.vg} PG/VG
	</>
}
