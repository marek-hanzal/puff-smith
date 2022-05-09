import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {WireFilter} from "@/puff-smith/site/market/wire/@module/filter/WireFilter";
import {WireList} from "@/puff-smith/site/market/wire/@module/list/WireList";
import {WiresSourceControlProvider} from "@/sdk/api/wire/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.wire.index"}
		menuSelection={["/market/wire"]}
		icon={<WireIcon/>}
	>
		<WiresSourceControlProvider
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<WireList
				header={() => <WireFilter/>}
			/>
		</WiresSourceControlProvider>
	</MarketPage>;
});
