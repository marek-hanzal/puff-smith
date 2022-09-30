import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {PercentageOutlined} from "@ant-design/icons";
import {toPercent} from "@leight-core/utils";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IAromaContentInlineProps {
	aroma: IAroma;
}

export const AromaContentInline: FC<IAromaContentInlineProps> = ({aroma}) => {
	return <Space>
		<Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
			<ContentInline tooltip={"common.aroma.content.tooltip"} content={aroma.content}/>
			<ContentInline tooltip={"common.aroma.volume.tooltip"} content={aroma.volume}/>
		</Space>
		<span>{toPercent(aroma.content, aroma.volume)}<PercentageOutlined/></span>
	</Space>;
};
