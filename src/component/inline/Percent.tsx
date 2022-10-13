import {PercentageOutlined} from "@ant-design/icons";
import {toHumanNumber}      from "@leight-core/viv";
import {
	Space,
	Typography
}                           from "antd";
import {FC}                 from "react";

export interface IPercentProps {
	value?: number;
}

export const Percent: FC<IPercentProps> = ({value}) => {
	return <Space>
		<Typography.Text>{toHumanNumber(value, "-", 2)}</Typography.Text>
		<Typography.Text type={"secondary"}><PercentageOutlined/></Typography.Text>
	</Space>;
};
