import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilCreateButton, CoilFilter, CoilTable} from "@/puff-smith/site/lab/coil";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BreadcrumbButton} from "@/puff-smith";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

const CoilButtonBar = () => <ButtonBar>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <LabPage
		title={"lab.coil.list"}
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
			<Space size={'small'}>
				<ListIcon/>{t('lab.coil.list.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		<CoilsFilterContext>
			<CoilFilter/>
			<CoilTable/>
		</CoilsFilterContext>
	</LabPage>;
});
