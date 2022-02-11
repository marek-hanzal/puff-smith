import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon, VapeIcon} from "@/puff-smith";
import {VapeDrawerCreateButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Breadcrumbs, ButtonBar, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";
import {Menu} from "antd";

const VapeButtonBar = () => <ButtonBar>
	<VapeDrawerCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	return <VapePage
		title={"lab.vape.index"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			<Menu.Item>
				<VapeDrawerCreateButton/>
			</Menu.Item>
			{entity && CreateMenuItem('lab.vape.button.clone', '/lab/vape/[vapeId]/clone', <CloneIcon/>, {vapeId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <VapePreview vape={vape}/>}
	</VapePage>;
});
