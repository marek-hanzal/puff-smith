import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CottonFilter} from "@/puff-smith/site/market/cotton/@module/filter/CottonFilter";
import {CottonList} from "@/puff-smith/site/market/cotton/@module/list/CottonList";
import {CottonListToolbar} from "@/puff-smith/site/market/cotton/@module/list/CottonListToolbar";
import {CottonCreateInline} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateInline";
import {CottonProviderControl} from "@/sdk/api/cotton/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.cotton.index"}
			menuSelection={["/market/cotton"]}
			icon={<CottonIcon/>}
			extra={<CottonCreateInline
				type={"primary"}
				size={"large"}
				icon={<CottonIcon/>}
			/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<CottonIcon/>}
					label={"market.cotton.label"}
				/>
			</Breadcrumbs>}
		>
			<CottonProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
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
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.cotton.index"}
			menuSelection={["/market/cotton"]}
			icon={<CottonIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<CottonProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<CottonList/>
				</SelectionProvider>
			</CottonProviderControl>
		</MobileMarketPage>
	</>;
});
