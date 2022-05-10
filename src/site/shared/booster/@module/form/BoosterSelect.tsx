import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {BoosterNameInline} from "@/puff-smith/site/shared/booster/@module/inline/BoosterNameInline";
import {BoosterFilterProvider, BoosterSourceSelect, IBoosterSourceSelectProps} from "@/sdk/api/booster/query";
import {Space} from "antd";
import {FC} from "react";

export interface IBoosterSelectProps extends Partial<IBoosterSourceSelectProps> {
}

export const BoosterSelect: FC<IBoosterSelectProps> = props => {
	return <BoosterFilterProvider>
		<BoosterSourceSelect
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
	</BoosterFilterProvider>;
};
