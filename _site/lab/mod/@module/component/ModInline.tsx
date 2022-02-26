import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {Space, Typography} from "antd";
import {useIsMobile} from "@leight-core/common";

export interface IModInlineProps {
	mod?: ModDto | null;
}

export const ModInline: FC<IModInlineProps> = ({mod}) => {
	const isMobile = useIsMobile();
	return mod ? <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		<Typography.Text>{mod.name}</Typography.Text>
		<Typography.Text type={'secondary'}>{mod.vendor.name}</Typography.Text>
	</Space> : <>-</>
}
