import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidList} from "@/puff-smith/site/lab/liquid";
import {QuickFilter} from "@/puff-smith/site/shared/liquid";
import {LiquidsSourceControlProvider} from "@/sdk/api/liquid/query";
import {ButtonBar} from "@leight-core/client";

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
			<LiquidList
				header={() => <QuickFilter/>}
			/>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
