import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {ModFilter} from "@/puff-smith/site/market/mod/@module/filter/ModFilter";
import {ModList} from "@/puff-smith/site/market/mod/@module/list/ModList";
import {ModListToolbar} from "@/puff-smith/site/market/mod/@module/list/ModListToolbar";
import {ModProviderControl} from "@/sdk/api/mod/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.mod.index"}
			menuSelection={["/market/mod"]}
			icon={<ModIcon/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<ModIcon/>}
					label={"market.mod.label"}
				/>
			</Breadcrumbs>}
		>
			<ModProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={{
					name: "asc",
				}}
			>
				<SelectionProvider type={"multi"}>
					<ModList
						header={() => <RowInline
							extra={<ModListToolbar/>}
						>
							<ModFilter/>
						</RowInline>}
					/>
				</SelectionProvider>
			</ModProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.mod.index"}
			menuSelection={["/market/mod"]}
			icon={<ModIcon/>}
			onBack={navigate => navigate("/market")}
		>
			mods
		</MobileMarketPage>
	</>;
});
