import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LabMenu} from "@/puff-smith/site/lab/@module/menu/LabMenu";
import {Template} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <>
		<BrowserLabPage
			title={"lab.index"}
			menuSelection={["/lab"]}
			icon={<LabIcon/>}
		>
			<Template
				style={{}}
				icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
				status={"info"}
				label={"lab.home"}
			/>
		</BrowserLabPage>
		<MobileLabPage>
			<LabMenu/>
		</MobileLabPage>
	</>;
});
