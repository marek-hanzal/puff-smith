import {withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {LiquidCreateButton, LiquidEditButton, LiquidInline, LiquidListButton, LiquidPlotButton, LiquidPreview} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {HomeIcon, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LiquidPage
		title={"lab.liquid.index"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/list')}
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
				<Space size={'small'}>
					<LiquidIcon/>{t('lab.liquid.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={entityContext => isMobile ? <QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
			{entityContext.entity && <Menu.Item>
				<LiquidPlotButton liquid={entityContext.entity}/>
			</Menu.Item>}
		</QuickMenu> : <Space>
			{entityContext.entity && <LiquidPlotButton liquid={entityContext.entity}/>}
			<LiquidListButton/>
			<LiquidCreateButton type={'primary'}/>
		</Space>}
	>
		{liquid => <>
			<PreviewTemplate
				icon={<LiquidIcon/>}
				title={<LiquidInline liquid={liquid}/>}
				extra={<>
					<Space>
						<LiquidEditButton liquid={liquid}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<LiquidPreview liquid={liquid}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</LiquidPage>;
});
