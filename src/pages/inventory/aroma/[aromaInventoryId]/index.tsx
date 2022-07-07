import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventoryFetch} from "@/puff-smith/service/aroma/inventory/interface";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {AromaRatingButton} from "@/puff-smith/site/inventory/aroma/@module/button/AromaRatingButton";
import {AromaIndexMenu} from "@/puff-smith/site/inventory/aroma/@module/menu/AromaIndexMenu";
import {AromaView} from "@/puff-smith/site/shared/aroma/@module/view/AromaView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs} from "@leight-core/client";
import {Divider} from "antd";

export default withInventoryLayout(function Index({aromaInventory}: IAromaInventoryFetch) {
	return <BrowserInventoryPage
		onBack={navigate => navigate("/inventory/aroma")}
		title={"inventory.aroma.aroma"}
		tabTitle={"inventory.aroma.aroma.title.tab"}
		values={{aromaInventory}}
		components={TransComponents}
		menuSelection={["/inventory/aroma", "/inventory/aroma/[aromaInventoryId]"]}
		icon={<LiquidIcon/>}
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
		footer={<AromaIndexMenu aromaInventory={aromaInventory}/>}
	>
		<AromaView
			aroma={aromaInventory.aroma}
			extra={<>
				<AromaRatingButton aromaInventory={aromaInventory}/>
				<Divider/>
			</>}
		/>
	</BrowserInventoryPage>;
});

export const getServerSideProps = AromaInventorySource().withFetch("aromaInventory", "aromaInventoryId");
