import {LiquidIcon} from "@/puff-smith";
import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidsSourceControlProvider} from "@/sdk/api/liquid/query";
import {LiquidList} from "@/puff-smith/site/lab/liquid";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={['/lab/liquid']}
		icon={<LiquidIcon/>}
	>
		<LiquidsSourceControlProvider>
			<LiquidList/>
		</LiquidsSourceControlProvider>
	</LabPage>;
});
