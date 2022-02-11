import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon} from "@/puff-smith";
import {CreateVapeForm, VapeDrawerCreateButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template, useParams} from "@leight-core/leight";

const VapeButtonBar = () => <ButtonBar>
	<VapeDrawerCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function Clone() {
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.clone"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/[vapeId]', {vapeId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbButton
				href={'/lab/vape/[vapeId]'}
				query={{vapeId}}
				title={'lab.vape.index.label'}
			/>
			<BreadcrumbIcon
				icon={<CloneIcon/>}
				label={'lab.vape.clone.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <Template>
			<CreateVapeForm vape={vape}/>
		</Template>}
	</VapePage>;
});
