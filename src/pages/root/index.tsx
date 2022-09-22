import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {MobileRootPage} from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {RootMenu} from "@/puff-smith/site/root/@module/menu/RootMenu";
import {HomeIcon, Template} from "@leight-core/client";

export default withRootLayout(function Index() {
	return <>
		<BrowserRootPage
			title={"root.index"}
			menuSelection={["/root"]}
			icon={<HomeIcon/>}
		>
			<Template
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"root.home"}
			/>
		</BrowserRootPage>
		<MobileRootPage>
			<RootMenu/>
		</MobileRootPage>
	</>;
});
