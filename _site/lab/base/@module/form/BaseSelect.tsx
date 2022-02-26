import {BasesSourceSelect, IBasesSourceSelectProps} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {FC} from "react";
import {BaseInline} from "../component/BaseInline";

export interface IBaseSelectProps extends Partial<IBasesSourceSelectProps> {
}

export const BaseSelect: FC<IBaseSelectProps> = props => {
	return <BasesSourceSelect
		showSearch
		optionLabelProp={'name'}
		toOption={base => ({
			label: <BaseInline base={base}/>,
			value: base.id,
			...base,
		})}
		{...props}
	/>
}
