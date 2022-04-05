import {IBooster} from "@/puff-smith/service/booster";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IBoosterNameInlineProps extends Partial<SpaceProps> {
	booster: IBooster;
}

export const BoosterNameInline: FC<IBoosterNameInlineProps> = ({booster, ...props}) => {
	return <Space {...props}>
		{booster.name}
		<Typography.Text type={"secondary"}>{booster.vendor.name}</Typography.Text>
	</Space>;
};