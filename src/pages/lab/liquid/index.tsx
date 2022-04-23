import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidList, LiquidListToolbar} from "@/puff-smith/site/lab/liquid";
import {QuickFilter} from "@/puff-smith/site/shared/liquid";
import {LiquidsSourceControlProvider} from "@/sdk/api/liquid/query";
import {ButtonBar, ButtonLink, SelectionProvider} from "@leight-core/client";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
		extra={<ButtonBar>
			<ButtonLink
				type={"primary"}
				icon={<LiquidIcon/>}
				size={"large"}
				href={"/lab/liquid/create"}
				title={"lab.liquid.create.button"}
			/>
		</ButtonBar>}
	>
		<LiquidsSourceControlProvider
			defaultOrderBy={{
				mixed: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<LiquidList
					header={() => <Space size={"large"}>
						<LiquidListToolbar/>
						<QuickFilter/>
					</Space>}
				/>
			</SelectionProvider>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
