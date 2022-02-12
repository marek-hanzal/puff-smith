import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {VendorIcon} from "@/puff-smith";
import {VendorCreateButton, VendorPreview} from "@/puff-smith/site/lab/vendor";
import {VendorPage} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";

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
