import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRatioSourceSelectProps, RatioSourceControlProvider, RatioSourceSelect} from "@/sdk/api/base/ratio/query";
import {FC} from "react";

export interface IBaseRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const BaseRatioSelect: FC<IBaseRatioSelectProps> = props => {
	return <RatioSourceControlProvider>
		<RatioSourceSelect
			toOption={item => ({
				...item,
				label: <VgPgInline vgpg={item}/>
			})}
			{...props}
		/>
	</RatioSourceControlProvider>;
};
