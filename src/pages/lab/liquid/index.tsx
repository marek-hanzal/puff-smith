import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidsSourceControlProvider, useLiquidsQuery} from "@/sdk/api/liquid/query";
import {LiquidCreateButton, LiquidList} from "@/puff-smith/site/lab/liquid";
import {ButtonBar} from "@leight-core/client";
import {useAromasInventoryQuery} from "@/sdk/api/aroma/inventory/query";

export default withLabLayout(function Index() {
	const aromasInventoryQuery = useAromasInventoryQuery();
	const liquidsQuery = useLiquidsQuery();
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={['/lab/liquid']}
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
		<LiquidsSourceControlProvider>
			<LiquidList/>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
