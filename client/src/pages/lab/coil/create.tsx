import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil.create"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/coil'}
				title={'lab.coil.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/list'}
				title={'lab.coil.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.coil.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		<CreateTemplate>
			<CreateCoilForm/>
		</CreateTemplate>
	</LabPage>;
});
