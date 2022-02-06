import {withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildCreateButton, BuildEditButton, BuildListButton, BuildPlotButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {HomeIcon, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <BuildPage
		title={"lab.build.index"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/list')}
		breadcrumbProps={_ => <Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BuildIcon/>{t('lab.build.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={entityContext => isMobile ? <QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
			{entityContext.entity && <Menu.Item>
				<BuildPlotButton build={entityContext.entity}/>
			</Menu.Item>}
		</QuickMenu> : <Space>
			{entityContext.entity && <BuildPlotButton build={entityContext.entity}/>}
			<BuildListButton/>
			<BuildCreateButton type={'primary'}/>
		</Space>}
	>
		{build => <>
			<PreviewTemplate
				icon={<BuildIcon/>}
				title={<AtomizerInline atomizer={build.atomizer}/>}
				subTitle={<CoilInline coil={build.coil}/>}
				extra={<>
					<Space>
						<BuildEditButton build={build}/>
						<BuildCloneButton build={build}/>
						<BuildVapeButton build={build}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<BuildPreview build={build}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
