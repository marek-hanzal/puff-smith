import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CottonFilter} from "@/puff-smith/site/market/cotton/@module/filter/CottonFilter";
import {CottonList} from "@/puff-smith/site/market/cotton/@module/list/CottonList";
import {CottonListToolbar} from "@/puff-smith/site/market/cotton/@module/list/CottonListToolbar";
import {CottonProviderControl} from "@/sdk/api/cotton/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.cotton.index"}
		menuSelection={["/market/cotton"]}
		icon={<CottonIcon/>}
	>
		<CottonProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<CottonList
					header={() => <RowInline
						extra={<CottonListToolbar/>}
					>
						<CottonFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</CottonProviderControl>
	</MarketPage>;
});
