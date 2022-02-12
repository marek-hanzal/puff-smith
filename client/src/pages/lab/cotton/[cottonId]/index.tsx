import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CottonIcon} from "@/puff-smith";
import {CottonCreateButton, CottonPreview} from "@/puff-smith/site/lab/cotton";
import {CottonPage} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <CottonPage
		title={"lab.cotton.index"}
		menuSelection={['/lab/cotton']}
		onBack={navigate => navigate('/lab/cotton')}
		breadcrumbProps={({entity}) => entity && <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/cotton'}
				title={'lab.cotton.label'}
			/>
			<BreadcrumbIcon
				icon={<CottonIcon/>}
				label={t('lab.cotton.index.label', {data: entity})}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<CottonCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CottonCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{cotton => <CottonPreview cotton={cotton}/>}
	</CottonPage>;
});
