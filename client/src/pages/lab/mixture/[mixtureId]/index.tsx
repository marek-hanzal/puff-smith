import {MixtureIcon, PlotIcon} from "@/puff-smith";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {Menu} from "antd";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {MixtureCreateButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureCreateButton";
import {MixturePlotButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixturePlotButton";
import {MixturePreview} from "@/puff-smith/site/lab/mixture/@module/component/MixturePreview";

export default withLabLayout(function Index() {
	return <MixturePage
		title={"lab.mixture.index"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<BreadcrumbIcon
				icon={<MixtureIcon/>}
				label={'lab.mixture.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
			{CreateMenuItem('lab.mixture.button.plot', '/lab/mixture/[mixtureId]/plot', <PlotIcon/>, {mixtureId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<MixturePlotButton mixture={entity}/>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mixture => <MixturePreview mixture={mixture}/>}
	</MixturePage>;
});
