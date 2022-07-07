import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {InventoryPage} from "@/puff-smith/site/inventory/@module/component/InventoryPage";
import {withInventoryLayout} from "@/puff-smith/site/inventory/@module/layout/layout";
import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {BrowserContent, MobileContent, Template, useMobile} from "@leight-core/client";

export default withInventoryLayout(function Index() {
	const mobile = useMobile();
	return <InventoryPage
		title={"inventory.index"}
		menuSelection={["/inventory"]}
		icon={<InventoryIcon/>}
		extra={<>
			<MobileContent>
				<SignOutButton/>
			</MobileContent>
		</>}
		cardProps={{
			bodyStyle: mobile({padding: "0"}, undefined),
		}}
	>
		<BrowserContent>
			<Template
				style={{}}
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"inventory.home"}
			/>
		</BrowserContent>
		<MobileMenu active={"/inventory"}/>
	</InventoryPage>;
});
