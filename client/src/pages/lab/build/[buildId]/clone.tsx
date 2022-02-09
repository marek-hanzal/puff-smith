import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon} from "@/puff-smith";
import {Divider} from "antd";
import {BuildCreateButton, BuildLinkButton, BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BackIcon, BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template, useParams} from "@leight-core/leight";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";

interface IBuildButtonBarProps {
	build: BuildDto;
}

const BuildButtonBar: FC<IBuildButtonBarProps> = ({build}) => <ButtonBar>
	<BuildLinkButton icon={<BackIcon/>} build={build} title={'lab.build.link.button'}/>
</ButtonBar>;

export default withLabLayout(function Clone() {
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.clone"}
		collapsed
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
			<BreadcrumbIcon
				icon={<CloneIcon/>}
				label={'lab.build.clone.label'}
			/>
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
		{build => <Template
			extra={<>
				<BuildButtonBar build={build}/>
				<Divider/>
			</>}
		>
			<CreateBuildForm build={build}/>
		</Template>}
	</BuildPage>;
});
