import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LabMenu} from "@/puff-smith/site/lab/@module/menu/LabMenu";
import {BrowserContent, HomeIcon, MobileContent, Template, useMobile} from "@leight-core/client";
import {JumboTabs} from "antd-mobile";

export default withLabLayout(function Index() {
	const mobile = useMobile();
	return <LabPage
		title={"lab.index"}
		menuSelection={["/lab"]}
		icon={<HomeIcon/>}
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
				label={"lab.home"}
			/>
		</BrowserContent>
		<MobileContent>
			<JumboTabs>
				<JumboTabs.Tab title="Bla 1" description="SubBla 1" key="fruits">
					BLA BLA 1
				</JumboTabs.Tab>
				<JumboTabs.Tab title="Bla 2" description="SubBla 2" key="vegetables">
					BLA BLA 2
				</JumboTabs.Tab>
				<JumboTabs.Tab title="Bla 3" description="SubBla 3" key="animals">
					BLA BLA 3
				</JumboTabs.Tab>
			</JumboTabs>
			<LabMenu
				mode={"inline"}
			/>
		</MobileContent>
	</LabPage>;
});
