import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {BuildCloneButton, BuildCreateButton, BuildLinkButton, BuildListButton, PatchBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, EditIcon, EditTemplate, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

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
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton> : <Space>
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
