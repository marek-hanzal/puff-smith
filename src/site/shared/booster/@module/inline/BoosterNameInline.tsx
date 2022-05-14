import {IBooster} from "@/puff-smith/service/booster/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IBoosterNameInlineProps extends Partial<SpaceProps> {
	booster: IBooster;
}

export const BoosterNameInline: FC<IBoosterNameInlineProps> = ({booster, ...props}) => {
	return <Space
		split={"-"}
		{...props}
	>
		<Typography.Text>{booster.name}</Typography.Text>
		<Typography.Text type={"secondary"}>{booster.vendor.name}</Typography.Text>
	</Space>;
};
