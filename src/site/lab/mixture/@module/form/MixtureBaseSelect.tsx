import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/mixture/inventory/mixture/base/query";
import {FC} from "react";

export interface IMixtureBaseSelectProps extends Partial<IBaseSourceSelectProps> {
}

export const MixtureBaseSelect: FC<IMixtureBaseSelectProps> = props => {
	return <BaseSourceSelect
		showSearch
		toOption={item => ({
			value: item.id,
			label: <BaseNameInline base={item}/>
		})}
		{...props}
	/>;
};
