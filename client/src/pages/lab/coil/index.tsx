import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {CoilCreateButton, CoilFilter, CoilTable} from "@/puff-smith/site/lab/coil";
import {Menu} from "antd";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.coil"}
		collapsed
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CoilIcon/>}
				label={'lab.coil.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CoilCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<CoilsFilterContext>
			<CoilFilter/>
			<CoilTable/>
		</CoilsFilterContext>
	</LabPage>;
});
