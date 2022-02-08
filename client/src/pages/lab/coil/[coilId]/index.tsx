import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {CoilCreateButton, CoilListButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <CoilPage
		title={"lab.coil.index"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/list')}
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
				<CoilIcon/>{t('lab.coil.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		{coil => <>
			<CoilPreview coil={coil}/>
			<Divider/>
		</>}
	</CoilPage>;
});
