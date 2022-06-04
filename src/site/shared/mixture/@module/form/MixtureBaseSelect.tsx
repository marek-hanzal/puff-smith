import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseProviderControl, BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/mixture/base/query";
import {ComponentProps, FC} from "react";

export interface IMixtureBaseSelectProps extends Partial<IBaseSourceSelectProps> {
	control?: ComponentProps<typeof BaseProviderControl>;
}

export const MixtureBaseSelect: FC<IMixtureBaseSelectProps> = ({control, ...props}) => {
	return <BaseProviderControl
		{...control}
	>
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
