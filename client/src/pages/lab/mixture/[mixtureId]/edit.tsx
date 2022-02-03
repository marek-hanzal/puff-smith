import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {MixtureCreateButton, MixtureLinkButton, MixtureListButton, MixturePlotButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, ButtonLink, EditIcon, EditTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.edit"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture', {mixtureId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/mixture'}
					title={'lab.mixture.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/mixture/list'}
					title={'lab.mixture.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={entityContext => <QuickMenu>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<MixtureListButton/>
			</Menu.Item>
			{entityContext.entity && <Menu.Item>
				<MixturePlotButton mixture={entityContext.entity}/>
			</Menu.Item>}
		</QuickMenu>}
	>
		{mixture => <>
			<LabMenu/>
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
