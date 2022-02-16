import {FC} from "react";
import {DriptipDto} from "@/sdk/puff-smith/driptip/dto";
import {Space, Typography} from "antd";

export interface IDriptipInlineProps {
	driptip: DriptipDto | null;
}

export const DriptipInline: FC<IDriptipInlineProps> = ({driptip}) => {
	return driptip ? <Space>
		<Typography.Text>{driptip.name}</Typography.Text>
		<Typography.Text type={'secondary'}>{driptip.vendor.name}</Typography.Text><br/>
	</Space> : <>-</>
}
