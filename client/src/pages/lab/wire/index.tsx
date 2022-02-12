import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {WireIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {WireCreateButton, WireFilter, WireTable} from "@/puff-smith/site/lab/wire";
import {WiresFilterContext} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {Menu} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.wire"}
		menuSelection={['/lab/wire']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<WireIcon/>}
				label={'lab.wire.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<WireCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<WireCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<WiresFilterContext>
			<WireFilter/>
			<WireTable/>
		</WiresFilterContext>
	</LabPage>;
});