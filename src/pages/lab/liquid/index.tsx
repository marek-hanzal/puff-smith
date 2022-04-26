import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid/@module/button/LiquidCreateButton";
import {LiquidList} from "@/puff-smith/site/lab/liquid/@module/list/LiquidList";
import {LiquidListToolbar} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListToolbar";
import {QuickFilter} from "@/puff-smith/site/shared/liquid/@module/filter/QuickFilter";
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
					header={() => <Space size={"large"}>
						<LiquidListToolbar/>
						<QuickFilter/>
					</Space>}
				/>
			</SelectionProvider>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
