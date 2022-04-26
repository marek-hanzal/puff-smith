import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IContent2InlineProps {
	value1?: number | null;
	value2?: number | null;
}

export const Content2Inline: FC<IContent2InlineProps> = ({value1, value2}) => {
	return <Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
		<ContentInline content={value1}/>
		<ContentInline content={value2}/>
	</Space>;
};
