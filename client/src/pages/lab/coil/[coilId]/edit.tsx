import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {CoilCloneButton, CoilCreateButton, CoilLinkButton, CoilListButton, PatchCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {coilId} = useParams();
	useSiderCollapseContext().useCollapse(true, true);
	return <CoilPage
		title={"lab.coil.edit"}
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
			<Space size={'small'}>
				<EditIcon/>{t('lab.coil.edit.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		{coil => <>
			<EditTemplate
				icon={<CoilIcon/>}
				label={'lab.coil'}
				extra={<>
					<Space>
						<CoilLinkButton icon={<BackIcon/>} coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchCoilForm coil={coil}/>
			</EditTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
