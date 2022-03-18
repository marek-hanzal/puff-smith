import {AtomizerIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {AtomizersList} from "@/puff-smith/site/market/atomizer";
import {AtomizersSourceControlProvider} from "@/sdk/api/atomizer/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={['/market/atomizer']}
		icon={<AtomizerIcon/>}
	>
		<AtomizersSourceControlProvider
			defaultOrderBy={{
				name: 'asc',
			}}
		>
			<AtomizersList/>
		</AtomizersSourceControlProvider>
	</MarketPage>;
});