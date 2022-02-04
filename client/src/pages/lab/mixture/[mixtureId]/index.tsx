import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureInline, MixtureListButton, MixturePlotButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {ButtonLink, HomeIcon, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <MixturePage
		title={"lab.mixture.index"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/list')}
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
				<Space size={'small'}>
					<MixtureIcon/>{t('lab.mixture.index.label')}
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
			<PreviewTemplate
				icon={<MixtureIcon/>}
				title={<MixtureInline mixture={mixture}/>}
				extra={<>
					<MixtureEditButton mixture={mixture}/>
					<Divider/>
				</>}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</MixturePage>;
});
