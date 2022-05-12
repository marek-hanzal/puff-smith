import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/market/atomizer/@module/filter/AtomizerFilter";
import {AtomizerList} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerList";
import {AtomizerSourceControlProvider} from "@/sdk/api/atomizer/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.atomizer.index"}
		menuSelection={["/market/atomizer"]}
		icon={<AtomizerIcon/>}
	>
		<AtomizerSourceControlProvider
			defaultSize={10}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<AtomizerList
				header={() => <AtomizerFilter/>}
			/>
		</AtomizerSourceControlProvider>
	</MarketPage>;
});
