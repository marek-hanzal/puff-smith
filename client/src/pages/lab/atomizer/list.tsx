import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerCreateButton, AtomizerFilter, AtomizerTable} from "@/puff-smith/site/lab/atomizer";
import {HomeIcon, ListIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem} from "@leight-core/leight/dist";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.atomizer.list"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer'}
					title={'lab.atomizer.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<ListIcon/>{t('lab.atomizer.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<AtomizersFilterContext>
			<AtomizerFilter/>
			<AtomizerTable/>
		</AtomizersFilterContext>
	</LabPage>;
});
