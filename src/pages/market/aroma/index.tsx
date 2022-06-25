import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/site/market/aroma/@module/list/AromaList";
import {AromaListToolbar} from "@/puff-smith/site/market/aroma/@module/list/AromaListToolbar";
import {AromaCreateButton} from "@/puff-smith/site/shared/aroma/@module/button/AromaCreateButton";
import {AromaFilter} from "@/puff-smith/site/shared/aroma/@module/filter/AromaFilter";
import {AromaProviderControl} from "@/sdk/api/aroma/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.aroma.index"}
		menuSelection={["/market/aroma"]}
		icon={<AromaIcon/>}
		extra={<AromaCreateButton/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<MarketIcon/>}
			/>
			<BreadcrumbIcon
				icon={<AromaIcon/>}
				label={"market.aroma.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "market.aroma.index",
		}}
	>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<AromaList
					header={() => <RowInline
						extra={<AromaListToolbar/>}
					>
						<AromaFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</AromaProviderControl>
	</MarketPage>;
});
