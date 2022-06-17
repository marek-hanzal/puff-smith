import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseFilterProvider, BaseSourceSelect, IBaseSourceSelectProps} from "@/sdk/api/base/query";
import {Space} from "antd";
import {FC} from "react";

export interface IBaseSelectProps extends Partial<IBaseSourceSelectProps> {
}

export const BaseSelect: FC<IBaseSelectProps> = props => {
	return <BaseFilterProvider>
		<BaseSourceSelect
			showSearch
			allowClear
			toOption={base => ({
				label: <Space>
					<BaseNameInline base={base}/>
					<VgPgInline vgpg={base}/>
				</Space>,
				value: base.id,
			})}
			{...props}
		/>
	</BaseFilterProvider>;
};
