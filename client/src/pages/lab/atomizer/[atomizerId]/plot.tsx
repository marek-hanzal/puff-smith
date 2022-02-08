import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Space} from "antd";
import {AtomizerCreateButton, AtomizerListButton} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.plot"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/[atomizerId]', {atomizerId})}
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
				<BreadcrumbButton
					href={'/lab/atomizer/list'}
					title={'lab.atomizer.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer/[atomizerId]'}
					query={{atomizerId}}
					title={'lab.atomizer.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BarChartOutlined/>{t('lab.atomizer.plot.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem("lab.atomizer.button.create", "/lab/atomizer/create", <CreateIcon/>)}
			{CreateMenuItem("lab.atomizer.button.list", "/lab/atomizer/list", <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<AtomizerListButton/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <>
			<VapesFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable defaultFilter={{atomizerIds: [atomizer.id]}} hidden={['atomizer']}/>
			</VapesFilterContext>
			<Divider/>
		</>}
	</AtomizerPage>;
});
