import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon, PlotIcon} from "@/puff-smith";
import {LiquidCreateButton, LiquidListButton, LiquidPlotButton, LiquidPreview} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {FC} from "react";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

interface ILiquidButtonBarProps {
	liquid?: LiquidDto;
}

const LiquidButtonBar: FC<ILiquidButtonBarProps> = ({liquid}) => <ButtonBar>
	{liquid && <LiquidPlotButton liquid={liquid}/>}
	<LiquidListButton/>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <LiquidPage
		title={"lab.liquid.index"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<BreadcrumbButton
				href={'/lab/liquid/list'}
				title={'lab.liquid.list.label'}
			/>
			<Space size={'small'}>
				<LiquidIcon/>{t('lab.liquid.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.liquid.button.plot', '/lab/liquid/[liquidId]/plot', <PlotIcon/>, {liquidId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => <LiquidButtonBar liquid={entity}/>}
	>
		{liquid => <>
			<LiquidPreview liquid={liquid}/>
			<Divider/>
		</>}
	</LiquidPage>;
});
