import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {MixtureCreateButton, MixtureLinkButton, MixtureListButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, EditIcon, EditTemplate, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {ButtonBar, CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.edit"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture', {mixtureId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture'}
					title={'lab.mixture.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture/list'}
					title={'lab.mixture.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture/[mixtureId]'}
					query={{mixtureId}}
					title={'lab.mixture.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.mixture.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<MixtureListButton/>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
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
