import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {MixtureCreateButton, MixtureLinkButton, MixtureListButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureListButton/>
	<MixtureCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.edit"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture', {mixtureId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<BreadcrumbButton
				href={'/lab/mixture/list'}
				title={'lab.mixture.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/mixture/[mixtureId]'}
				query={{mixtureId}}
				title={'lab.mixture.index.label'}
			/>
			<Space size={'small'}>
				<EditIcon/>{t('lab.mixture.edit.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		{mixture => <>
			<EditTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture'}
				extra={<>
					<MixtureLinkButton icon={<BackIcon/>} mixture={mixture} title={'lab.mixture.link.button'}/>
					<Divider/>
				</>}
			>
				<PatchMixtureForm mixture={mixture}/>
			</EditTemplate>
			<Divider/>
		</>}
	</MixturePage>;
});
