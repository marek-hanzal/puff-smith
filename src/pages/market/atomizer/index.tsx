import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/market/atomizer/@module/filter/AtomizerFilter";
import {AtomizerList} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerList";
import {AtomizerListToolbar} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerListToolbar";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {AtomizerProviderControl} from "@/sdk/api/atomizer/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.atomizer.index"}
			menuSelection={["/market/atomizer"]}
			icon={<AtomizerIcon/>}
			extra={<AtomizerCreateButton/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<AtomizerIcon/>}
					label={"market.atomizer.label"}
				/>
			</Breadcrumbs>}
		>
			<AtomizerProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<AtomizerList
						header={() => <RowInline
							extra={<AtomizerListToolbar/>}
						>
							<AtomizerFilter/>
						</RowInline>}
					/>
				</SelectionProvider>
			</AtomizerProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.atomizer.index"}
			menuSelection={["/market/atomizer"]}
			icon={<AtomizerIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<AtomizerProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<AtomizerList/>
				</SelectionProvider>
			</AtomizerProviderControl>
		</MobileMarketPage>
	</>;
});
