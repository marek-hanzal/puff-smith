import {FiberProviderControl, FiberSourceSelect, IFiberSourceSelectProps} from "@/sdk/api/fiber/query";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IFiberSelectProps extends Partial<IFiberSourceSelectProps> {
}

export const FiberSelect: FC<IFiberSelectProps> = props => {
	return <FiberProviderControl>
		<FiberSourceSelect
			showSearch
			allowClear
			toOption={fiber => ({
				value: fiber.id,
				label: <Space>
					<Typography.Text>{fiber.code}</Typography.Text>
					<Typography.Text type={"secondary"}>({fiber.mm}mm)</Typography.Text>
				</Space>,
			})}
			{...props}
		/>
	</FiberProviderControl>;
};
