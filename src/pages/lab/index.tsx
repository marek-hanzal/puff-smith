import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MobilePage} from "@/puff-smith/component/MobilePage";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BrowserContent, Template} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <>
		<BrowserContent>
			<LabPage
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
			</LabPage>
		</BrowserContent>
		<MobilePage
			icon={<LabIcon/>}
			title={"lab.index"}
		>
			...lab menu here
		</MobilePage>
	</>;
});
