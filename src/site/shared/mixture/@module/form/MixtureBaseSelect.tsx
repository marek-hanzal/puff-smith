import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseProviderControl, BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/mixture/base/query";
import {FC} from "react";

export interface IMixtureBaseSelectProps extends Partial<IBaseSourceSelectProps> {
}

export const MixtureBaseSelect: FC<IMixtureBaseSelectProps> = props => {
	return <BaseProviderControl>
		<BaseSourceSelect
			showSearch
			toOption={base => ({
				label: <BaseNameInline base={base}/>,
				value: base.id,
			})}
			{...props}
		/>
	</BaseProviderControl>;
};
