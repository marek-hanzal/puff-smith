import {FC} from "react";
import {CottonsSourceSelect, ICottonsSourceSelectProps} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {Typography} from "antd";

export interface ICottonSelectProps extends Partial<ICottonsSourceSelectProps> {
}

export const CottonSelect: FC<ICottonSelectProps> = props => {
	return <CottonsSourceSelect
		showSearch
		toOption={cotton => ({
			label: <>{cotton.name}&nbsp;<Typography.Text type={'secondary'}>{cotton.vendor.name}</Typography.Text></>,
			value: cotton.id,
		})}
		{...props}
	/>
}
