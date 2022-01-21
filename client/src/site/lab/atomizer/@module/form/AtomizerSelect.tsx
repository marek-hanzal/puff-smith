import {AtomizersSourceSelect, IAtomizersSourceSelectProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Typography} from "antd";

export interface IAtomizerSelectProps extends Partial<IAtomizersSourceSelectProps> {
}

export const AtomizerSelect: FC<IAtomizerSelectProps> = props => {
	return <AtomizersSourceSelect
		showSearch
		toOption={atomizer => ({
			label: <>{atomizer.name}&nbsp;<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text></>,
			value: atomizer.id
		})}
		{...props}
	/>
}
