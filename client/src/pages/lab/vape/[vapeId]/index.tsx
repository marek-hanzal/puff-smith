import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon, VapeIcon} from "@/puff-smith";
import {VapeCreateButton, VapeListButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <VapePage
		title={"lab.vape.index"}
		collapsed
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
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
				href={'/lab/vape/list'}
				title={'lab.vape.list.label'}
			/>
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{entity && CreateMenuItem('lab.vape.button.clone', '/lab/vape/[vapeId]/clone', <CloneIcon/>, {vapeId: entity.id})}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <VapePreview vape={vape}/>}
	</VapePage>;
});
