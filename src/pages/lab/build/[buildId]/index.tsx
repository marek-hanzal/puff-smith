import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {BuildView} from "@/puff-smith/site/lab/build/@module/view/BuildView";
import {FetchBuild, useBuildQueryInvalidate} from "@/sdk/api/lab/build/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/lab/build/patch";

export default withLabLayout(function Index({build}: IBuildFetch) {
	const patchMutation = usePatchMutation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	return <FetchBuild queryParams={{id: build.id}}>
		{build => <LabPage
			title={"lab.build.build"}
			menuSelection={["/lab/build", "/lab/build/[buildId]"]}
			onBack={navigate => navigate("/lab/build")}
			icon={<BuildIcon/>}
			headerPostfix={<BuildIndexMenu build={build}/>}
			extra={<LikeDislikeInline
				id={build.id}
				rating={build.rating}
				mutator={patchMutation}
				onSuccess={async () => {
					await buildQueryInvalidate();
				}}
			/>}
		>
			<BuildView
				build={build}
			/>
		</LabPage>}
	</FetchBuild>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");
