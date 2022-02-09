import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {PlotIcon, VapeIcon} from "@/puff-smith";
import {Divider} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton size={'middle'}/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.vape.button.plot", "/lab/vape/plot", <PlotIcon/>)}
			{CreateMenuItem("lab.vape.button.create", "/lab/vape/create", <CreateIcon/>)}
			{CreateMenuItem("lab.vape.button.list", "/lab/vape/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<VapeButtonBar/>
				<Divider/>
			</>}
		>
			<RecentVapeTable/>
		</Template>
	</LabPage>;
});
