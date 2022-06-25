import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BaseList} from "@/puff-smith/site/market/base/@module/list/BaseList";
import {BaseListToolbar} from "@/puff-smith/site/market/base/@module/list/BaseListToolbar";
import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {BaseCreateInline} from "@/puff-smith/site/shared/base/@module/form/BaseCreateInline";
import {BaseProviderControl} from "@/sdk/api/base/query";
import {SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.base.index"}
		menuSelection={["/market/base"]}
		icon={<BaseIcon/>}
		extra={<BaseCreateInline
			type={"primary"}
			size={"large"}
			icon={<BaseIcon/>}
		/>}
	>
		<BaseProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				vg: "desc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<BaseList
					header={() => <RowInline
						extra={<BaseListToolbar/>}
					>
						<BaseFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</BaseProviderControl>
	</MarketPage>;
});
