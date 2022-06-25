import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {WireList} from "@/puff-smith/site/market/wire/@module/list/WireList";
import {WireListToolbar} from "@/puff-smith/site/market/wire/@module/list/WireListToolbar";
import {WireFilter} from "@/puff-smith/site/shared/wire/@module/filter/WireFilter";
import {WireCreateInline} from "@/puff-smith/site/shared/wire/@module/form/WireCreateInline";
import {WireProviderControl} from "@/sdk/api/wire/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.wire.index"}
		menuSelection={["/market/wire"]}
		icon={<WireIcon/>}
		extra={<WireCreateInline
			type={"primary"}
			size={"large"}
			icon={<WireIcon/>}
		/>}
	>
		<WireProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<WireList
					header={() => <RowInline
						extra={<WireListToolbar/>}
					>
						<WireFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</WireProviderControl>
	</MarketPage>;
});
