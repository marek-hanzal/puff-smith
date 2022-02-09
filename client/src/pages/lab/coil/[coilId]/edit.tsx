import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {Divider} from "antd";
import {CoilCloneButton, CoilCreateButton, CoilLinkButton, CoilListButton, PatchCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Edit() {
	const {coilId} = useParams();
	return <CoilPage
		title={"lab.coil.edit"}
		collapsed
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/[coilId]', {coilId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/coil'}
				title={'lab.coil.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/list'}
				title={'lab.coil.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/[coilId]'}
				query={{coilId}}
				title={'lab.coil.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.coil.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		{coil => <EditTemplate
			icon={<CoilIcon/>}
			label={'lab.coil'}
			extra={<>
				<ButtonBar>
					<CoilLinkButton icon={<BackIcon/>} coil={coil}/>
					<CoilCloneButton coil={coil}/>
				</ButtonBar>
				<Divider/>
			</>}
		>
			<PatchCoilForm coil={coil}/>
		</EditTemplate>}
	</CoilPage>;
});
