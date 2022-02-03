import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureInline, MixtureListButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Rate, Space} from "antd";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";
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
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<MixtureListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{mixture => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<MixtureIcon/>}
				title={<MixtureInline mixture={mixture}/>}
				subTitle={<Rate count={10} disabled value={mixture.rating || undefined}/>}
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
