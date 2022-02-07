import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildCreateButton, BuildEditButton, BuildListButton, BuildPlotButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {HomeIcon, PreviewTemplate} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isBrowser, isMobile} from "react-device-detect";
import {ButtonBar, CreateMenuItem} from "@leight-core/leight/dist";
import {BarChartOutlined} from "@ant-design/icons";

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
		extra={({entity}) => isMobile ? <LabMenuDrawerButton>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
			{entity && CreateMenuItem('lab.build.button.plot', '/lab/build/[buildId]/plot', <BarChartOutlined/>, {buildId: entity.id})}
		</LabMenuDrawerButton> : <Space>
			{entity && <BuildPlotButton build={entity}/>}
			<BuildListButton/>
			<BuildCreateButton type={'primary'}/>
		</Space>}
	>
		{build => <>
			<PreviewTemplate
				icon={isBrowser ? <BuildIcon/> : <></>}
				title={build.atomizer.name}
				subTitle={build.coil.wire.name}
				browserExtra={<>
					<ButtonBar>
						<BuildEditButton build={build}/>
						<BuildCloneButton build={build}/>
						<BuildVapeButton build={build}/>
					</ButtonBar>
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
