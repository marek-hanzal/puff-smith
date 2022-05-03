import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IRatioSourceSelectProps, RatioSourceControlProvider, RatioSourceSelect} from "@/sdk/api/booster/ratio";
import {FC} from "react";

export interface IBoosterRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const BoosterRatioSelect: FC<IBoosterRatioSelectProps> = props => {
	return <RatioSourceControlProvider>
		<RatioSourceSelect
			toOption={item => ({
				...item,
				label: <PgVgInline pgvg={item}/>
			})}
			{...props}
		/>
	</RatioSourceControlProvider>;
};
