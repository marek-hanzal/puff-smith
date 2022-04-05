import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {BasesFilterProvider, BasesSourceSelect, IBasesSourceSelectProps} from "@/sdk/api/base/query";
import {FC} from "react";

export interface IBaseSelectProps extends Partial<IBasesSourceSelectProps> {
}

export const BaseSelect: FC<IBaseSelectProps> = props => {
	return <BasesFilterProvider>
		<BasesSourceSelect
			showSearch
			allowClear
			toOption={base => ({
				label: <BaseNameInline base={base}/>,
				value: base.id,
			})}
			{...props}
		/>
	</BasesFilterProvider>;
};
