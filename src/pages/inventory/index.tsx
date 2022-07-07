import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {BrowserInventoryPage} from "@/puff-smith/site/inventory/@module/component/BrowserInventoryPage";
import {MobileInventoryPage} from "@/puff-smith/site/inventory/@module/component/MobileInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {Template} from "@leight-core/client";

export default withInventoryLayout(function Index() {
	return <>
		<BrowserInventoryPage
			icon={<InventoryIcon/>}
			title={"inventory.index"}
			menuSelection={["/inventory"]}
		>
			<Template
				style={{}}
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"inventory.home"}
			/>
		</BrowserInventoryPage>
		<MobileInventoryPage>
		</MobileInventoryPage>
	</>;
});
