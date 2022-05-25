import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseInventoryList";
import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseInventoryProviderControl, BaseInventorySourceSelect, IBaseInventorySourceSelectProps} from "@/sdk/api/base/inventory/query";
import {FC} from "react";

export interface IBaseInventorySelectProps extends Partial<IBaseInventorySourceSelectProps> {
}

export const BaseInventorySelect: FC<IBaseInventorySelectProps> = props => {
	return <BaseInventoryProviderControl
		defaultOrderBy={{
			base: {pg: "desc"},
		}}
	>
		<BaseInventorySourceSelect
			showSearch
			allowClear
			toOption={({base}) => ({
				label: <BaseNameInline base={base}/>,
				value: base.id,
			})}
			selectionList={() => <BaseInventoryList
				header={() => <BaseFilter
					toFilter={filter => ({base: filter})}
				/>}
			/>}
			{...props}
		/>
	</BaseInventoryProviderControl>;
};
