import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {useMixtureUpdateMutation} from "@/sdk/api/mixture/update";
import {HomeIcon, Template, useNavigate} from "@leight-core/client";
import {Button} from "antd";

export default withRootLayout(function Index() {
	const mixtureUpdateMutation = useMixtureUpdateMutation();
	const navigate = useNavigate();
	return <RootPage
		title={"root.index"}
		menuSelection={["/root"]}
		icon={<HomeIcon/>}
	>
		<Template
			icon={<FullLogoIcon style={{width: "20vw", maxWidth: "30em"}}/>}
			status={"info"}
			label={"root.home"}
			extra={<Button
				size={"large"}
				type={"primary"}
				icon={<LiquidIcon/>}
				onClick={() => mixtureUpdateMutation.mutate({aromaId: null}, {
					onSuccess: () => {
						navigate("/to/root/job");
					}
				})}
				loading={mixtureUpdateMutation.isLoading}
			>Kaboom!</Button>}
		/>
	</RootPage>;
});
