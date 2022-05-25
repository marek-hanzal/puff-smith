import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
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
			toOption={booster => ({
				label: <Space>
					<BoosterNameInline booster={booster}/>
					<VgPgInline vgpg={booster}/>
					<NicotineInline nicotine={booster.nicotine}/>
				</Space>,
				value: booster.id,
			})}
			{...props}
		/>
	</BoosterFilterProvider>;
};
