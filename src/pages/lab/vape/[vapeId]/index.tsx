import {VapeIcon} from "@/puff-smith";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {VapeDrawerCreateButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeDrawerCreateButton";
import {VapePreview} from "@/puff-smith/site/lab/vape/@module/component/VapePreview";
import {VapeRateButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeRateButton";

export default withLabLayout(function Index() {
	return <VapePage
		title={"lab.vape.index"}
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
			<BreadcrumbIcon
				icon={<VapeIcon/>}
				label={'lab.vape.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			<Menu.Item>
				<VapeDrawerCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<VapeRateButton vape={entity}/>
			<VapeDrawerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{vape => <VapePreview vape={vape}/>}
	</VapePage>;
});
