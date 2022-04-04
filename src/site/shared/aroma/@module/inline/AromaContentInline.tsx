import {IAroma} from "@/puff-smith/service/aroma";
import {FC} from "react";
import {Space, Typography} from "antd";
import {ContentInline} from "@/puff-smith";

export interface IAromaContentInlineProps {
	aroma: IAroma;
}

export const AromaContentInline: FC<IAromaContentInlineProps> = ({aroma}) => {
	return <Space size={4} split={<Typography.Text type={'secondary'}>/</Typography.Text>}>
		<ContentInline tooltip={'common.aroma.content.tooltip'} content={aroma.content}/>
		<ContentInline tooltip={'common.aroma.volume.tooltip'} content={aroma.volume}/>
	</Space>
}
