import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {WireList} from "@/puff-smith/site/market/wire/@module/list/WireList";
import {WireFilter} from "@/puff-smith/site/shared/wire/@module/filter/WireFilter";
import {WireSourceControlProvider} from "@/sdk/api/wire/query";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.wire.index"}
		menuSelection={["/market/wire"]}
		icon={<WireIcon/>}
	>
		<WireSourceControlProvider
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<WireList
				header={() => <WireFilter/>}
			/>
		</WireSourceControlProvider>
	</MarketPage>;
});
