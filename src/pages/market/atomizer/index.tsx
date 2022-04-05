import {AtomizerIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {AtomizerList} from "@/puff-smith/site/market/atomizer";
import {AtomizersSourceControlProvider} from "@/sdk/api/atomizer/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={["/market/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizersSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<AtomizerList/>
		</AtomizersSourceControlProvider>
	</MarketPage>;
});
