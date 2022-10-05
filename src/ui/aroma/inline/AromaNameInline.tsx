import {IAroma}   from "@/puff-smith/service/aroma/interface";
import {Ellipsis} from "@leight-core/client";
import {
	Space,
	SpaceProps,
	Typography
}                 from "antd";
import {FC}       from "react";

export interface IAromaNameInlineProps extends Partial<SpaceProps> {
	aroma: IAroma;
	inline?: boolean;
}

export const AromaNameInline: FC<IAromaNameInlineProps> = ({aroma, inline = true, ...props}) => {
	return <Space
		direction={inline ? "horizontal" : "vertical"}
		{...props}
	>
		<Typography.Text><Ellipsis content={aroma.name}/></Typography.Text>
		<Typography.Text type={"secondary"}><Ellipsis content={aroma.vendor.name}/></Typography.Text>
	</Space>;
};
