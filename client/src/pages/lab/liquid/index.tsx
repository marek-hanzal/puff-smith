import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidFilter, LiquidListButton, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {Breadcrumbs} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidListButton size={'middle'}/>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<Space size={'small'}>
				<LiquidIcon/>{t('lab.liquid.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<LiquidButtonBar/>
				<Divider/>
			</>}
		>
			<LiquidsFilterContext>
				<LiquidFilter/>
				<LiquidTable/>
			</LiquidsFilterContext>
		</Template>
		<Divider/>
	</LabPage>;
});
