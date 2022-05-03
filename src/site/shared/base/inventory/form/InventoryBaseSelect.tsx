import {BaseInventoryList} from "@/puff-smith/site/lab/base/inventory/@module/list/BaseInventoryList";
import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {IInventoryBasesSourceSelectProps, InventoryBasesFilterProvider, InventoryBasesOrderByProvider, InventoryBasesSourceSelect} from "@/sdk/api/base/inventory/base/query";
import {FC} from "react";

export interface IInventoryBaseSelectProps extends Partial<IInventoryBasesSourceSelectProps> {
}

export const InventoryBaseSelect: FC<IInventoryBaseSelectProps> = props => {
	return <InventoryBasesFilterProvider>
		<InventoryBasesOrderByProvider
			defaultOrderBy={{
				pg: "desc",
			}}
		>
			<InventoryBasesSourceSelect
				showSearch
				allowClear
				toOption={base => ({
					label: <BaseNameInline base={base}/>,
					value: base.id,
				})}
				selectionList={() => <BaseInventoryList
					header={() => <BaseFilter
						toFilter={filter => ({base: filter})}
						toForm={filter => filter?.base}
					/>}
				/>}
				{...props}
			/>
		</InventoryBasesOrderByProvider>
	</InventoryBasesFilterProvider>;
};
