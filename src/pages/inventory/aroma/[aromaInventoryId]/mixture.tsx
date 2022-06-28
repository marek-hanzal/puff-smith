import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {TransComponents} from "@/puff-smith/component/Trans";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventoryFetch} from "@/puff-smith/service/aroma/inventory/interface";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/inventory/aroma/@module/menu/AromaIndexMenu";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureUserJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureUserJobButton";
import {MixtureInventoryProviderControl} from "@/sdk/api/inventory/mixture/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template, useFilterContext} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

interface IInternalListProps {
	aroma: IAroma;
}

const InternalList: FC<IInternalListProps> = ({aroma}) => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template span={22}>
			<Row gutter={32}>
				<Col span={12}>
					<MixtureFilter
						inline
						aroma={aroma}
					/>
				</Col>
				<Col span={12}>
					<Template
						style={{marginTop: "0em"}}
						icon={<MixtureIcon/>}
						label={"market.aroma.mixture.filter"}
						span={12}
						extra={<MixtureUserJobButton/>}
					/>
				</Col>
			</Row>
		</Template> :
		<MixtureList
			header={() => <RowInline
				extra={<MixtureUserJobButton/>}
			>
				<MixtureFilter/>
			</RowInline>}
		/>;
};

export default withInventoryLayout(function Mixture({aromaInventory}: IAromaInventoryFetch) {
	return <InventoryPage
		title={"inventory.aroma.mixture"}
		tabTitle={"inventory.aroma.mixture.title.tab"}
		values={{aromaInventory}}
		components={TransComponents}
		onBack={navigate => navigate("/inventory/aroma")}
		menuSelection={["/inventory/aroma", "/inventory/aroma/[aromaInventoryId]/mixture"]}
		icon={<MixtureIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/inventory/aroma"}
				label={"inventory.aroma.label"}
			/>
			<BreadcrumbButton
				href={"/inventory/aroma/[aromaInventoryId]"}
				query={{
					aromaInventoryId: aromaInventory.id,
				}}
				label={`${aromaInventory.aroma.name} ${aromaInventory.aroma.vendor.name}`}
			/>
			<BreadcrumbIcon
				icon={<MixtureIcon/>}
				label={"inventory.aroma.mixture.label"}
			/>
		</Breadcrumbs>}
		footer={<AromaIndexMenu aromaInventory={aromaInventory}/>}
	>
		<MixtureInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				aromaId: aromaInventory.aroma.id,
			}}
			defaultFilter={{
				nicotineToRound: 0,
			}}
			defaultSource={{
				nicotineToRound: 0,
			}}
			defaultOrderBy={[
				{vg: "desc"},
				{nicotine: "desc"},
			] as any}
		>
			<InternalList aroma={aromaInventory.aroma}/>
		</MixtureInventoryProviderControl>
	</InventoryPage>;
});

export const getServerSideProps = AromaInventorySource().withFetch("aromaInventory", "aromaInventoryId");

