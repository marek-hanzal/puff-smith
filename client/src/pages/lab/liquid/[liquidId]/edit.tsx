import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {LiquidCreateButton, LiquidLinkButton, LiquidListButton, PatchLiquidForm} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BackIcon, EditTemplate, QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <LiquidPage
		title={"lab.liquid.edit"}
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
			<EditTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid'}
				extra={<>
					<Space>
						<LiquidLinkButton icon={<BackIcon/>} liquid={liquid}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchLiquidForm liquid={liquid}/>
			</EditTemplate>
		</>}
	</LiquidPage>;
});
