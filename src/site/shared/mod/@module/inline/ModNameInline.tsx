import {IMod} from "@/puff-smith/service/mod/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IModNameInlineProps extends Partial<SpaceProps> {
	mod: IMod;
}

export const ModNameInline: FC<IModNameInlineProps> = ({mod, ...props}) => {
	return <Space {...props}>
		{mod.name}
		<Typography.Text type={"secondary"}>{mod.vendor.name}</Typography.Text>
	</Space>;
};
