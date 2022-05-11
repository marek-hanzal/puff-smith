import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {useCoilUpdateMutation} from "@/sdk/api/coil/update";
import {useMixtureUpdateMutation} from "@/sdk/api/mixture/update";
import {ButtonBar, HomeIcon, Template, useNavigate} from "@leight-core/client";
import {Button} from "antd";

export default withRootLayout(function Index() {
	const mixtureUpdateMutation = useMixtureUpdateMutation();
	const coilUpdateMutation = useCoilUpdateMutation();
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
			extra={<ButtonBar>
				<Button
					size={"large"}
					type={"link"}
					icon={<LiquidIcon/>}
					onClick={() => mixtureUpdateMutation.mutate(undefined, {
						onSuccess: () => {
							navigate("/root/job");
						}
					})}
					loading={mixtureUpdateMutation.isLoading}
				>Mixture!</Button>
				<Button
					size={"large"}
					type={"link"}
					icon={<CoilIcon/>}
					onClick={() => coilUpdateMutation.mutate(undefined, {
						onSuccess: () => {
							navigate("/root/job");
						}
					})}
					loading={coilUpdateMutation.isLoading}
				>Coils!</Button>
			</ButtonBar>}
		/>
	</RootPage>;
});
