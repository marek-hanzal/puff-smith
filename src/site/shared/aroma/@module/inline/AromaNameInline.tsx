import {IAroma} from "@/puff-smith/service/aroma/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IAromaNameInlineProps extends Partial<SpaceProps> {
	aroma: IAroma;
}

export const AromaNameInline: FC<IAromaNameInlineProps> = ({aroma, ...props}) => {
	return <Space {...props}>
		{aroma.name}
		<Typography.Text type={"secondary"}>{aroma.vendor.name}</Typography.Text>
	</Space>;
};
