import {IFiber} from "@/puff-smith/service/fiber/interface";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IFiberInlineProps {
	fiber: IFiber;
}

export const FiberInline: FC<IFiberInlineProps> = ({fiber}) => {
	return <Space>
		<Typography.Text>{fiber.code}</Typography.Text>
		<Typography.Text>{fiber.ga}GA</Typography.Text>
		<Typography.Text type={"secondary"}>({fiber.mm}mm)</Typography.Text>
		<Typography.Text>{fiber.material.code}</Typography.Text>
	</Space>;
};
