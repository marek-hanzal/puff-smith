import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Space} from "antd";
import {LiquidCreateButton, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";
import {ButtonBar, CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.plot"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/liquid'}
					title={'lab.liquid.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/liquid/list'}
					title={'lab.liquid.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/liquid/[liquidId]'}
					query={{liquidId}}
					title={'lab.liquid.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BarChartOutlined/>{t('lab.liquid.plot.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<LiquidListButton/>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{liquid => <>
			<VapesFilterContext defaultFilter={{liquidIds: [liquid.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable defaultFilter={{liquidIds: [liquid.id]}}/>
			</VapesFilterContext>
			<Divider/>
		</>}
	</LiquidPage>;
});
