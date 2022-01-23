import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {Space, Typography} from "antd";

export interface IModInlineProps {
	mod: ModDto;
}

export const ModInline: FC<IModInlineProps> = ({mod}) => {
	return <Space>
		<span>{mod.name}</span>
		<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text>
	</Space>
}
