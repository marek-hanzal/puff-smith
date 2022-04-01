import {FC} from "react";
import {AromasFilterProvider, AromasSourceSelect, IAromasSourceSelectProps} from "@/sdk/api/aroma/query";
import {Space, Typography} from "antd";

export interface IAromaSelectProps extends Partial<IAromasSourceSelectProps> {
}

export const AromaSelect: FC<IAromaSelectProps> = props => {
	return <AromasFilterProvider>
		<AromasSourceSelect
			showSearch
			toOption={aroma => ({
				label: <Space>
					{aroma.name}
					<Typography.Text type={'secondary'}>{aroma.vendor.name}</Typography.Text>
				</Space>,
				value: aroma.id,
			})}
			{...props}
		/>
	</AromasFilterProvider>
}
