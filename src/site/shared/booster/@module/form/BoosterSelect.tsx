import {NicotineInline, PgVgInline} from "@/puff-smith";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster";
import {BoostersFilterProvider, BoostersSourceSelect, IBoostersSourceSelectProps} from "@/sdk/api/booster/query";
import {Space} from "antd";
import {FC} from "react";

export interface IBoosterSelectProps extends Partial<IBoostersSourceSelectProps> {
}

export const BoosterSelect: FC<IBoosterSelectProps> = props => {
	return <BoostersFilterProvider>
		<BoostersSourceSelect
			showSearch
			allowClear
			toOption={booster => ({
				label: <Space>
					<BoosterNameInline booster={booster}/>
					<PgVgInline pgvg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
				</Space>,
				value: booster.id,
			})}
			{...props}
		/>
	</BoostersFilterProvider>;
};
