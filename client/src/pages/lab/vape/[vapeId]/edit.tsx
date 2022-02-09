import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider} from "antd";
import {PatchVapeForm, VapeCloneButton, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function Edit() {
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.edit"}
		collapsed
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape', {vapeId})}
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
			<BreadcrumbButton
				href={'/lab/vape/[vapeId]'}
				query={{vapeId}}
				title={'lab.vape.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.vape.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <EditTemplate
			extra={<>
				<ButtonBar>
					<VapeLinkButton icon={<BackIcon/>} vape={vape}/>
					<VapeCloneButton vape={vape}/>
				</ButtonBar>
				<Divider/>
			</>}
		>
			<PatchVapeForm vape={vape}/>
		</EditTemplate>}
	</VapePage>;
});
