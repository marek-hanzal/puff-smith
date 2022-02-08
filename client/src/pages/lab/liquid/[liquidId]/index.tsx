import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon, PlotIcon} from "@/puff-smith";
import {LiquidCreateButton, LiquidEditButton, LiquidInline, LiquidListButton, LiquidPlotButton, LiquidPreview} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Breadcrumb, Divider, Space} from "antd";
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
		extra={({entity}) => isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.liquid.button.plot', '/lab/liquid/[liquidId]/plot', <PlotIcon/>, {liquidId: entity.id})}
		</LabMenuDrawerButton> : <ButtonBar>
			{entity && <LiquidPlotButton liquid={entity}/>}
			<LiquidListButton/>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{liquid => <>
			<PreviewTemplate
				icon={<LiquidIcon/>}
				title={<LiquidInline liquid={liquid}/>}
				extra={<>
					<ButtonBar>
						<LiquidEditButton liquid={liquid}/>
					</ButtonBar>
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
