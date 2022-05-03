import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {IRatioSourceSelectProps, RatioSourceControlProvider, RatioSourceSelect} from "@/sdk/api/mixture/inventory/mixture/ratio";
import {FC} from "react";

export interface IMixtureRatioSelectProps extends Partial<IRatioSourceSelectProps> {
}

export const MixtureRatioSelect: FC<IMixtureRatioSelectProps> = props => {
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
