import {ModIcon} from "@/puff-smith";
import {ModPage} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {ModCreateButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModCreateButton";
import {ModPreview} from "@/puff-smith/site/lab/mod/@module/component/ModPreview";

export default withLabLayout(function Index() {
	return <ModPage
		title={"lab.mod.index"}
		menuSelection={['/lab/mod']}
		onBack={navigate => navigate('/lab/mod')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mod'}
				title={'lab.mod.label'}
			/>
			<BreadcrumbIcon
				icon={<ModIcon/>}
				label={'lab.mod.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<ModCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<ModCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mod => <ModPreview mod={mod}/>}
	</ModPage>;
});
