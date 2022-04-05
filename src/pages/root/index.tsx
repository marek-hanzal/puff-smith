import {FullLogoIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {HomeIcon, Template} from "@leight-core/client";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.index"}
		menuSelection={["/root"]}
		icon={<HomeIcon/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"root.home"}
		/>
	</RootPage>;
});
