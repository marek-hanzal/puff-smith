import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidList, LiquidListToolbar} from "@/puff-smith/site/lab/liquid";
import {QuickFilter} from "@/puff-smith/site/shared/liquid";
import {LiquidsSourceControlProvider} from "@/sdk/api/liquid/query";
import {ButtonBar, SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
		extra={<ButtonBar>
			<LiquidCreateButton/>
		</ButtonBar>}
	>
		<LiquidsSourceControlProvider
			defaultOrderBy={{
				mixed: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<LiquidList
					header={() => <Space direction={"vertical"} size={"large"}>
						<QuickFilter/>
						<LiquidListToolbar/>
					</Space>}
				/>
			</SelectionProvider>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
