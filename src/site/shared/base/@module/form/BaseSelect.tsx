import {PgVgInline} from "@/puff-smith";
import {BaseNameInline} from "@/puff-smith/site/shared/base";
import {BasesFilterProvider, BasesSourceSelect, IBasesSourceSelectProps} from "@/sdk/api/base/query";
import {Space} from "antd";
import {FC} from "react";

export interface IBaseSelectProps extends Partial<IBasesSourceSelectProps> {
}

export const BaseSelect: FC<IBaseSelectProps> = props => {
	return <BasesFilterProvider>
		<BasesSourceSelect
			showSearch
			allowClear
			toOption={base => ({
				label: <Space>
					<BaseNameInline base={base}/>
					<PgVgInline pgvg={base}/>
				</Space>,
				value: base.id,
			})}
			{...props}
		/>
	</BasesFilterProvider>;
};
