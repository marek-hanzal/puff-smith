import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateButton, LiquidEditButton, LiquidListButton, LiquidPreview} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Divider, Menu, Space} from "antd";

export default withLabLayout(function Index() {
	return <LiquidPage
		title={"lab.liquid.index"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		extra={<QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{liquid => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid.index'}
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
