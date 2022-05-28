import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {HomeIcon, Template} from "@leight-core/client";

export default withInventoryLayout(function Index() {
	return <InventoryPage
		title={"inventory.index"}
		menuSelection={["/inventory"]}
		icon={<HomeIcon/>}
	>
		<Template
			style={{}}
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"inventory.home"}
		/>
	</InventoryPage>;
});
