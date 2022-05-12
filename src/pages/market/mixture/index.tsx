import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {MixtureList} from "@/puff-smith/site/market/mixture/@module/list/MixtureList";
import {MixtureFilter} from "@/puff-smith/site/shared/mixture/@module/filter/MixtureFilter";
import {MixtureMarketSourceControlProvider} from "@/sdk/api/mixture/market/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.mixture.index"}
		menuSelection={["/market/mixture"]}
		icon={<MixtureIcon/>}
		withHelp={{
			translation: "market.mixture.index",
		}}
	>
		<MixtureMarketSourceControlProvider
			defaultSize={10}
			defaultOrderBy={[
				{aroma: {name: "asc"}},
				{vg: "desc"},
				{nicotine: "asc"},
			] as any}
		>
			<MixtureList
				header={() => <MixtureFilter/>}
			/>
		</MixtureMarketSourceControlProvider>
	</MarketPage>;
});
