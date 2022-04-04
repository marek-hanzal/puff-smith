import {FC} from "react";
import {BoostersFilterProvider, BoostersSourceSelect, IBoostersSourceSelectProps} from "@/sdk/api/booster/query";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";

export interface IBoosterSelectProps extends Partial<IBoostersSourceSelectProps> {
}

export const BoosterSelect: FC<IBoosterSelectProps> = props => {
	return <BoostersFilterProvider>
		<BoostersSourceSelect
			showSearch
			allowClear
			toOption={booster => ({
				label: <BoosterNameInline booster={booster}/>,
				value: booster.id,
			})}
			{...props}
		/>
	</BoostersFilterProvider>
}
