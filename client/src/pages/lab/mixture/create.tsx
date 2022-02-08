import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateMixtureForm, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";

const MixtureButtonBar = () => <ButtonBar>
	<MixtureListButton/>
</ButtonBar>

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.create"}
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
			<BreadcrumbButton
				href={'/lab/mixture/list'}
				title={'lab.mixture.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.mixture.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<MixtureButtonBar/>}
	>
		<CreateTemplate>
			<CreateMixtureForm/>
		</CreateTemplate>
	</LabPage>;
});
