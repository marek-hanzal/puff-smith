import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IRatioSourceSelectProps, RatioSourceSelect} from "@/sdk/api/mixture/ratio/query";
import {FC} from "react";

export interface IMixtureRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const MixtureRatioSelect: FC<IMixtureRatioSelectProps> = props => {
	return <RatioSourceSelect
		toOption={item => ({
			...item,
			label: <PgVgInline pgvg={item}/>
		})}
		{...props}
	/>;
};
