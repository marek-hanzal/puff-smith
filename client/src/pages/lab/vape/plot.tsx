import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeFilter, VapeListButton, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BarChartOutlined} from "@ant-design/icons";
import {BreadcrumbButton} from "@/puff-smith";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.plot"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<Space size={'small'}>
				<BarChartOutlined/>{t('lab.vape.plot.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapePlot
				selected={['median']}
			/>
			<Divider/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
