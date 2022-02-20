import {CoilIcon} from "@/puff-smith";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {CoilCreateButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilCreateButton";
import {CoilPreview} from "@/puff-smith/site/lab/coil/@module/component/CoilPreview";
import {CoilEditButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilEditButton";

export default withLabLayout(function Index() {
	return <CoilPage
		title={"lab.coil.index"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/coil'}
				title={'lab.coil.label'}
			/>
			<BreadcrumbIcon
				icon={<CoilIcon/>}
				label={'lab.coil.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<CoilEditButton coil={entity}/>
			<CoilCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{coil => <CoilPreview coil={coil}/>}
	</CoilPage>;
});
