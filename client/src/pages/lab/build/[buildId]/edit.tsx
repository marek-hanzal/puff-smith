import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {BuildCloneButton, BuildCreateButton, BuildLinkButton, BuildListButton, PatchBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	useSiderCollapseContext().useCollapse(true, true);
	return <BuildPage
		title={"lab.build.edit"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbButton
				href={'/lab/build/list'}
				title={'lab.build.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/build/[buildId]'}
				query={{buildId}}
				title={'lab.build.index.label'}
			/>
			<Space size={'small'}>
				<EditIcon/>{t('lab.build.edit.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<BuildListButton/>
			<BuildCreateButton type={'primary'}/>
		</ButtonBar>}
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
