import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureInventoryProviderControl} from "@/sdk/api/inventory/mixture/query";
import {Template, useFilterContext} from "@leight-core/client";
import {FC} from "react";

interface IInternalListProps {
}

const InternalList: FC<IInternalListProps> = () => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template
			style={{marginTop: "0em"}}
			icon={<MixtureIcon/>}
			label={"market.aroma.mixture.filter"}
			span={12}
		>
			<MixtureFilter
				inline
			/>
		</Template> :
		<MixtureList
			header={() => <RowInline>
				<MixtureFilter/>
			</RowInline>}
		/>;
};

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixtureInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={[
				{aroma: {name: "asc"}},
				{vg: "desc"},
				{nicotine: "asc"},
			] as any}
		>
			<InternalList/>
		</MixtureInventoryProviderControl>
	</LabPage>;
});
