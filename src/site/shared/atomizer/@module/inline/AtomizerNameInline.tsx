import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {Space, SpaceProps, Typography} from "antd";
import {FC} from "react";

export interface IAtomizerNameInlineProps extends Partial<SpaceProps> {
	atomizer: IAtomizer;
}

export const AtomizerNameInline: FC<IAtomizerNameInlineProps> = ({atomizer, ...props}) => {
	return <Space {...props}>
		<Typography.Text>{atomizer.name}</Typography.Text>
		<Typography.Text type={"secondary"}>{atomizer.vendor.name}</Typography.Text>
	</Space>;
};
