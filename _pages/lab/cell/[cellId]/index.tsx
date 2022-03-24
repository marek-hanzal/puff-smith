import {CellIcon} from "@/puff-smith";
import {CellPage} from "@/sdk/puff-smith/api/lab/voucher/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {withLabLayout} from "@/puff-smith/../../../../_site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/../../../../_site/lab/@module/component";
import {CellCreateButton} from "@/puff-smith/../../../../_site/lab/voucher/@module/component/button/CellCreateButton";
import {CellPreview} from "@/puff-smith/../../../../_site/lab/voucher/@module/component/CellPreview";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <CellPage
		title={"lab.voucher.index"}
		menuSelection={['/lab/voucher']}
		onBack={navigate => navigate('/lab/voucher')}
		breadcrumbProps={({entity}) => entity && <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/voucher'}
				title={'lab.voucher.label'}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={t('lab.voucher.index.label', {data: entity})}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CellCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CellCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{voucher => <CellPreview voucher={voucher}/>}
	</CellPage>;
});
