import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeFilter, VapePlotButton, VapeTable} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, PlotIcon} from "@/puff-smith";

const VapeButtonBar = () => <ButtonBar>
	<VapePlotButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.list"}
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
				<ListIcon/>{t('lab.vape.list.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.plot', '/lab/vape/plot', <PlotIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
