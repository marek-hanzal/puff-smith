import {VendorIcon} from "@/puff-smith";
import {VendorPage} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {withLabLayout} from "@/puff-smith/../../../../_site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/../../../../_site/lab/@module/component";
import {VendorCreateButton} from "@/puff-smith/../../../../_site/lab/vendor/@module/component/button/VendorCreateButton";
import {VendorPreview} from "@/puff-smith/../../../../_site/lab/vendor/@module/component/VendorPreview";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <VendorPage
		title={"lab.vendor.index"}
		menuSelection={['/lab/vendor']}
		onBack={navigate => navigate('/lab/vendor')}
		breadcrumbProps={({entity}) => entity && <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vendor'}
				title={'lab.vendor.label'}
			/>
			<BreadcrumbIcon
				icon={<VendorIcon/>}
				label={t('lab.vendor.index.label', {data: entity})}
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
		{vendor => <VendorPreview vendor={vendor}/>}
	</VendorPage>;
});
