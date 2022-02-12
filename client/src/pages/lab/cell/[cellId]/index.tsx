import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CellIcon} from "@/puff-smith";
import {CellCreateButton, CellPreview} from "@/puff-smith/site/lab/cell";
import {CellPage} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";

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
