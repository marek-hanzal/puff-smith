import {BaseIcon} from "@/puff-smith";
import {MarketPage, withMarketLayout} from "@/puff-smith/site/market";
import {BaseList} from "@/puff-smith/site/market/base";
import {QuickFilter} from "@/puff-smith/site/shared/base";
import {BasesSourceControlProvider} from "@/sdk/api/base/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.base.index"}
		menuSelection={["/market/base"]}
		icon={<BaseIcon/>}
	>
		<BasesSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
			defaultPage={0}
			defaultSize={5}
		>
			<BaseList
				header={() => <QuickFilter/>}
			/>
		</BasesSourceControlProvider>
	</MarketPage>;
});
