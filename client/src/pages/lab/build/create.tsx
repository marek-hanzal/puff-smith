import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, CreateIcon, HomeIcon, useParams} from "@leight-core/leight";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabPage} from "@/puff-smith/site/lab/@module/component";
import {ComposeForm} from "@/puff-smith/site/lab/build/@module/form/ComposerForm";

export default withLabLayout(function Create() {
	const {atomizerId} = useParams();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.build.create.label'}
			/>
		</Breadcrumbs>}
	>
		<VapesFilterContext>
			<ComposeForm
				defaultBuildFilter={{
					atomizerIds: atomizerId ? [atomizerId] : undefined,
					coilSize: 0.3,
				}}
			/>
		</VapesFilterContext>
	</LabPage>;
});
