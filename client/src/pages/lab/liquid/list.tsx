import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidFilter, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BreadcrumbButton} from "@/puff-smith";
import {Breadcrumbs} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid.list"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<Space size={'small'}>
				<ListIcon/>{t('lab.liquid.list.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<LiquidsFilterContext>
			<LiquidFilter/>
			<LiquidTable/>
		</LiquidsFilterContext>
	</LabPage>;
});
