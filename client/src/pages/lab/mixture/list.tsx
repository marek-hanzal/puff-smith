import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureFilter, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {Space} from "antd";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {MixturesFilterContext} from "@/sdk/puff-smith/api/lab/mixture/endpoint";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.list"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<Space size={'small'}>
				<LiquidIcon/>{t('lab.mixture.list.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		<MixturesFilterContext>
			<MixtureFilter/>
			<MixtureTable/>
		</MixturesFilterContext>
	</LabPage>;
});
