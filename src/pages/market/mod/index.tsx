import {ModIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {ModList} from "@/puff-smith/site/market/mod";
import {ModsSourceControlProvider} from "@/sdk/api/mod/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mod.index"}
		menuSelection={['/market/mod']}
		icon={<ModIcon/>}
	>
		<ModsSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<ModList/>
		</ModsSourceControlProvider>
	</MarketPage>;
});
