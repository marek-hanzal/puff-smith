import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {Space, Typography} from "antd";
import {isMobile} from "react-device-detect";

export interface IModInlineProps {
	mod?: ModDto | null;
}

export const ModInline: FC<IModInlineProps> = ({mod}) => {
	return mod ? <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		<span>{mod.name}</span>
		<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text>
	</Space> : <>-</>
}
