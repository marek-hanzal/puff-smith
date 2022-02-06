import {withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {BuildCloneButton, BuildCreateButton, BuildLinkButton, BuildListButton, BuildPlotButton, PatchBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, EditIcon, EditTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.edit"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumb>
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
				<BreadcrumbButton
					href={'/lab/build/[buildId]'}
					query={{buildId}}
					title={'lab.build.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.build.edit.label')}
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
			<EditTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<>
					<Space>
						<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
						<BuildCloneButton build={build}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchBuildForm build={build}/>
			</EditTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
