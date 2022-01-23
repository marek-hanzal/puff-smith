import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {Typography} from "antd";

export interface IModInlineProps {
	mod: ModDto;
}

export const ModInline: FC<IModInlineProps> = ({mod}) => {
	return <>
		{mod.name}&nbsp;<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text><br/>
	</>
}
