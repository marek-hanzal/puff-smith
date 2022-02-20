import {BoosterDto} from "@/sdk/puff-smith/booster/dto";
import {FC} from "react";
import {Typography} from "antd";

export interface IBoosterInlineProps {
	booster: BoosterDto | null;
}

export const BoosterInline: FC<IBoosterInlineProps> = ({booster}) => {
	return booster ? <>
		{booster.name}&nbsp;<Typography.Text type={'success'}>{booster.nicotine}mg</Typography.Text>&nbsp;<Typography.Text type={'secondary'}>{booster.vendor.name}</Typography.Text>
	</> : <>-</>;
}
