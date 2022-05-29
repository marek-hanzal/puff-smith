import {CoilInventoryProviderControl, CoilInventorySourceSelect, ICoilInventorySourceSelectProps} from "@/sdk/api/inventory/coil/query";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface ICoilSelectProps extends Partial<ICoilInventorySourceSelectProps> {
}

export const CoilSelect: FC<ICoilSelectProps> = props => {
	return <CoilInventoryProviderControl
		defaultSize={25}
		defaultOrderBy={{
			name: "asc",
		}}
	>
		<CoilInventorySourceSelect
			showSearch
			toOption={coil => ({
				value: coil.id,
				label: <Space split={"-"}>
					<Typography.Text>{coil.name}</Typography.Text>
					<Typography.Text type={"secondary"}>{coil.wire.vendor.name}</Typography.Text>
				</Space>
			})}
			{...props}
		/>
	</CoilInventoryProviderControl>;
};
