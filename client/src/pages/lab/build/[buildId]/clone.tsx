import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon, CloneIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {BuildCreateButton, BuildLinkButton, BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Breadcrumbs, ButtonBar} from "@leight-core/leight/dist";

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.clone"}
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
				<CloneIcon/>{t('lab.build.clone.label')}
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
			<CreateTemplate
				icon={<BuildIcon/>}
				label={'lab.build'}
				extra={<>
					<Space>
						<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateBuildForm build={build}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
