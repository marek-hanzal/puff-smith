import {IAroma} from "@/puff-smith/service/aroma/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IAromaNameInlineProps extends Partial<SpaceProps> {
	aroma: IAroma;
	inline?: boolean;
}

export const AromaNameInline: FC<IAromaNameInlineProps> = ({aroma, inline = true, ...props}) => {
	return <Space
		direction={inline ? "horizontal" : "vertical"}
		{...props}
	>
		<Typography.Text>{aroma.name}</Typography.Text>
		<Typography.Text type={"secondary"}>{aroma.vendor.name}</Typography.Text>
	</Space>;
};
