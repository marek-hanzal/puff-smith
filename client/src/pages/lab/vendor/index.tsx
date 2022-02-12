import {VendorIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {VendorsFilterContext} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {VendorCreateButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorCreateButton";
import {VendorFilter} from "@/puff-smith/site/lab/vendor/@module/form/VendorFilter";
import {VendorTable} from "@/puff-smith/site/lab/vendor/@module/table/VendorTable";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.vendor"}
		menuSelection={['/lab/vendor']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<VendorIcon/>}
				label={'lab.vendor.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<VendorCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<VendorCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<VendorsFilterContext>
			<VendorFilter/>
			<VendorTable/>
		</VendorsFilterContext>
	</LabPage>;
});
