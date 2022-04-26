import {ICotton} from "@/puff-smith/service/cotton/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface ICottonNameInlineProps extends Partial<SpaceProps> {
	cotton: ICotton;
}

export const CottonNameInline: FC<ICottonNameInlineProps> = ({cotton, ...props}) => {
	return <Space {...props}>
		{cotton.name}
		<Typography.Text type={"secondary"}>{cotton.vendor.name}</Typography.Text>
	</Space>;
};
