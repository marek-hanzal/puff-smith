import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilCreateButton, CoilFilter, CoilTable} from "@/puff-smith/site/lab/coil";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil.list"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/coil'}
					title={'lab.coil.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<ListIcon/>{t('lab.coil.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<CoilCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<CoilsFilterContext>
			<CoilFilter/>
			<CoilTable/>
		</CoilsFilterContext>
	</LabPage>;
});
