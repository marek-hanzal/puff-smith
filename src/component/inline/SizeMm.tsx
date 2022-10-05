import {toHumanNumber} from "@leight-core/utils";
import {
	Space,
	Typography
}                      from "antd";
import {FC}            from "react";

export interface ISizeMmProps {
	size: number;
}

export const SizeMm: FC<ISizeMmProps> = ({size}) => {
	return <Space size={1}>
		<Typography.Text>{toHumanNumber(size, "-", 2)}</Typography.Text>
		<Typography.Text type={"secondary"}>mm</Typography.Text>
	</Space>;
};
