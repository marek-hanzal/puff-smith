import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidList} from "@/puff-smith/site/lab/liquid";
import {useAromasInventoryQuery} from "@/sdk/api/aroma/inventory/query";
import {LiquidsSourceControlProvider, useLiquidsQuery} from "@/sdk/api/liquid/query";
import {ButtonBar} from "@leight-core/client";

export default withLabLayout(function Index() {
	const aromasInventoryQuery = useAromasInventoryQuery();
	const liquidsQuery = useLiquidsQuery();
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
		extra={<ButtonBar>
			{
				aromasInventoryQuery.isSuccess &&
				!!aromasInventoryQuery.data.count &&
				liquidsQuery.isSuccess &&
				!!liquidsQuery.data.count &&
				<LiquidCreateButton/>
			}
		</ButtonBar>}
	>
		<LiquidsSourceControlProvider
			defaultOrderBy={{
				mixed: "asc",
			}}
		>
			<LiquidList/>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
