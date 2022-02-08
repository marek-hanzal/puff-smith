import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {AtomizerListButton, CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

const AtomizerButtonBar = () => <ButtonBar>
	<AtomizerListButton/>
</ButtonBar>;

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <LabPage
		title={"lab.atomizer.create"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer'}
				title={'lab.atomizer.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/list'}
				title={'lab.atomizer.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.atomizer.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<AtomizerButtonBar/>}
	>
		<CreateTemplate>
			<CreateAtomizerForm/>
		</CreateTemplate>
	</LabPage>;
});
