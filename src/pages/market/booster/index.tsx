import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BoosterList} from "@/puff-smith/site/market/booster/@module/list/BoosterList";
import {BoosterListToolbar} from "@/puff-smith/site/market/booster/@module/list/BoosterListToolbar";
import {BoosterFilter} from "@/puff-smith/site/shared/booster/@module/filter/BoosterFilter";
import {BoosterCreateInline} from "@/puff-smith/site/shared/booster/@module/form/BoosterCreateInline";
import {BoosterProviderControl} from "@/sdk/api/booster/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.booster.index"}
			menuSelection={["/market/booster"]}
			icon={<BoosterIcon/>}
			withHelp={{
				translation: "market.booster.index",
			}}
			extra={<BoosterCreateInline
				type={"primary"}
				size={"large"}
				icon={<BoosterIcon/>}
			/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<BoosterIcon/>}
					label={"market.booster.label"}
				/>
			</Breadcrumbs>}
		>
			<BoosterProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{vg: "desc"},
					{nicotine: "desc"},
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<BoosterList
						header={() => <RowInline
							extra={<BoosterListToolbar/>}
						>
							<BoosterFilter/>
						</RowInline>}
					/>
				</SelectionProvider>
			</BoosterProviderControl>
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.booster.index"}
			menuSelection={["/market/booster"]}
			icon={<BoosterIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<BoosterProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{vg: "desc"},
					{nicotine: "desc"},
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<BoosterList/>
				</SelectionProvider>
			</BoosterProviderControl>
		</MobileMarketPage>
	</>;
});
