import {CellIcon} from "@/puff-smith";
import {CellPage} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {CellCreateButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellCreateButton";
import {CellPreview} from "@/puff-smith/site/lab/cell/@module/component/CellPreview";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <CellPage
		title={"lab.cell.index"}
		menuSelection={['/lab/cell']}
		onBack={navigate => navigate('/lab/cell')}
		breadcrumbProps={({entity}) => entity && <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/cell'}
				title={'lab.cell.label'}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={t('lab.cell.index.label', {data: entity})}
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
		{cell => <CellPreview cell={cell}/>}
	</CellPage>;
});
