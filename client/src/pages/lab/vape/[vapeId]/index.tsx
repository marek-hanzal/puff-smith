import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {VapeCloneButton, VapeCreateButton, VapeEditButton, VapeListButton, VapePreview, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {ButtonLink, HomeIcon, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <VapePage
		title={"lab.vape.index"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
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
					href={'/lab/vape'}
					title={'lab.vape.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/vape/list'}
					title={'lab.vape.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<VapeIcon/>{t('lab.vape.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapeListButton/>
			<VapeCreateButton type={'primary'}/>
		</Space>}
	>
		{vape => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<VapeIcon/>}
				title={<AtomizerInline atomizer={vape.build.atomizer}/>}
				subTitle={<MixtureInline mixture={vape.mixture}/>}
				extra={<>
					<Space>
						<VapeEditButton vape={vape}/>
						<VapeCloneButton vape={vape}/>
						<VapeRateButton vape={vape}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<VapePreview vape={vape}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
