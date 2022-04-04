import {FC} from "react";
import {Space, SpaceProps, Typography} from "antd";
import {IBase} from "@/puff-smith/service/base";

export interface IBaseNameInlineProps extends Partial<SpaceProps> {
	base: IBase;
}

export const BaseNameInline: FC<IBaseNameInlineProps> = ({base, ...props}) => {
	return <Space {...props}>
		{base.name}
		<Typography.Text type={'secondary'}>{base.vendor.name}</Typography.Text>
	</Space>;
}
