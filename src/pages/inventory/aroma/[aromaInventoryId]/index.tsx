import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventoryFetch} from "@/puff-smith/service/aroma/inventory/interface";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaIndexMenu} from "@/puff-smith/site/inventory/aroma/@module/menu/AromaIndexMenu";
import {AromaView} from "@/puff-smith/site/shared/aroma/@module/view/AromaView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";

export default withInventoryLayout(function Index({aromaInventory}: IAromaInventoryFetch) {
	return <InventoryPage
		onBack={navigate => navigate("/inventory/aroma")}
		title={"inventory.aroma.aroma"}
		tabTitle={"inventory.aroma.aroma.title.tab"}
		values={{aromaInventory}}
		components={TransComponents}
		menuSelection={["/inventory/aroma", "/inventory/aroma/[aromaInventoryId]"]}
		icon={<LiquidIcon/>}
		headerProps={{
			footer: <AromaIndexMenu aromaInventory={aromaInventory}/>,
		}}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/inventory"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/inventory/aroma"}
				label={"inventory.aroma.label"}
			/>
			<BreadcrumbIcon
				icon={<MixtureIcon/>}

				label={`${aromaInventory.aroma.name} ${aromaInventory.aroma.vendor.name}`}
			/>
		</Breadcrumbs>}
	>
		<AromaView aroma={aromaInventory.aroma}/>
	</InventoryPage>;
});

export const getServerSideProps = AromaInventorySource().withFetch("aromaInventory", "aromaInventoryId");
