import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateLiquidForm, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {Breadcrumbs} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid.create"}
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
			<BreadcrumbButton
				href={'/lab/liquid/list'}
				title={'lab.liquid.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.liquid.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		<CreateTemplate>
			<CreateLiquidForm/>
		</CreateTemplate>
	</LabPage>;
});
