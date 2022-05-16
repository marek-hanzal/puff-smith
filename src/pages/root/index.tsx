import {COIL_JOB, COILS_JOB} from "@/puff-smith/cli/jobs/coil/interface";
import {MIXTURE_JOB, MIXTURES_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {JobButton} from "@/puff-smith/component/button/JobButton";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {FullLogoIcon} from "@/puff-smith/component/icon/FullLogoIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {useCoilsJobMutation} from "@/sdk/api/coil/job/coils";
import {useMixturesJobMutation} from "@/sdk/api/mixture/job/mixtures";
import {ButtonBar, HomeIcon, Template} from "@leight-core/client";

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
			extra={<ButtonBar>
				<JobButton
					icon={<MixtureIcon/>}
					translation={"root.mixture.mixtures"}
					scheduler={useMixturesJobMutation()}
					schedule={{}}
					filter={{
						name: {
							in: [MIXTURES_JOB, MIXTURE_JOB]
						},
					}}
				/>
				<JobButton
					icon={<CoilIcon/>}
					translation={"root.coils.coils-job"}
					scheduler={useCoilsJobMutation()}
					schedule={{}}
					filter={{
						name: {
							in: [COILS_JOB, COIL_JOB]
						},
					}}
				/>
			</ButtonBar>}
		/>
	</RootPage>;
});
