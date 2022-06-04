import {IAroma} from "@/puff-smith/service/aroma/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IAromaNameInlineProps extends Partial<SpaceProps> {
	aroma: IAroma;
}

export const AromaNameInline: FC<IAromaNameInlineProps> = ({aroma, ...props}) => {
	return <Space
		direction={"vertical"}
		{...props}
	>
		<Typography.Text>{aroma.name}</Typography.Text>
		<Typography.Text type={"secondary"}>{aroma.vendor.name}</Typography.Text>
	</Space>;
};
