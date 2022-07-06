import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LabMenu} from "@/puff-smith/site/lab/@module/menu/LabMenu";
import {BrowserContent, HomeIcon, MobileContent, Template} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.index"}
		menuSelection={["/lab"]}
		icon={<HomeIcon/>}
		extra={<>
			<MobileContent>
				<SignOutButton/>
			</MobileContent>
		</>}
	>
		<BrowserContent>
			<Template
				style={{}}
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"lab.home"}
			/>
		</BrowserContent>
		<MobileContent>
			<LabMenu
				mode={"inline"}
			/>
		</MobileContent>
	</LabPage>;
});
