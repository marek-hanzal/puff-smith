import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerCreateButton, AtomizerFilter, AtomizerTable} from "@/puff-smith/site/lab/atomizer";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BreadcrumbButton} from "@/puff-smith";
import {Breadcrumbs} from "@leight-core/leight/dist";

const AtomizerButtonBar = () => <ButtonBar>
	<AtomizerCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.atomizer.list"}
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
			<Space size={'small'}>
				<ListIcon/>{t('lab.atomizer.list.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<AtomizerButtonBar/>}
	>
		<AtomizersFilterContext>
			<AtomizerFilter/>
			<AtomizerTable/>
		</AtomizersFilterContext>
	</LabPage>;
});
