import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BaseList} from "@/puff-smith/site/market/base/@module/list/BaseList";
import {BaseListToolbar} from "@/puff-smith/site/market/base/@module/list/BaseListToolbar";
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
		>
			<BaseList
				header={() => <BaseListToolbar/>}
			/>
		</BasesSourceControlProvider>
	</MarketPage>;
});
