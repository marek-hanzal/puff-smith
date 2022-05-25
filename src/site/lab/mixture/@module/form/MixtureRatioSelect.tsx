import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IRatioSourceSelectProps, RatioSourceSelect} from "@/sdk/api/mixture/inventory/mixture/ratio/query";
import {FC} from "react";

export interface IMixtureRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const MixtureRatioSelect: FC<IMixtureRatioSelectProps> = props => {
	return <RatioSourceSelect
		toOption={item => ({
			...item,
			label: <VgPgInline vgpg={item}/>
		})}
		{...props}
	/>;
};
