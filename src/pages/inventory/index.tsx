import {MobileInventoryPage} from "@/puff-smith/site/inventory/@module/component/MobileInventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {InventoryMenu} from "@/puff-smith/site/inventory/@module/menu/InventoryMenu";

export default withInventoryLayout(function Index() {
	return <>
		<MobileInventoryPage>
			<InventoryMenu/>
		</MobileInventoryPage>
	</>;
});
