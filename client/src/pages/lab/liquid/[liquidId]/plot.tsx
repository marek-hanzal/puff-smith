import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {LiquidCreateButton, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {ButtonLink, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.plot"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid'}
					title={'lab.liquid.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid/list'}
					title={'lab.liquid.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<LiquidListButton/>
			<LiquidCreateButton type={'primary'}/>
		</Space>}
	>
		{liquid => <>
			<LabMenu/>
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
