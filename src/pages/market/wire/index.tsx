import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {WireList} from "@/puff-smith/site/market/wire/@module/list/WireList";
import {WireListToolbar} from "@/puff-smith/site/market/wire/@module/list/WireListToolbar";
import {WireFilter} from "@/puff-smith/site/shared/wire/@module/filter/WireFilter";
import {WireCreateInline} from "@/puff-smith/site/shared/wire/@module/form/WireCreateInline";
import {WireProviderControl} from "@/sdk/api/wire/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.wire.index"}
			menuSelection={["/market/wire"]}
			icon={<WireIcon/>}
			extra={<WireCreateInline
				type={"primary"}
				size={"large"}
				icon={<WireIcon/>}
			/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<WireIcon/>}
					label={"market.wire.label"}
				/>
			</Breadcrumbs>}
		>
			<WireProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
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
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.wire.index"}
			menuSelection={["/market/wire"]}
			icon={<WireIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<WireProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={[
					{name: "asc"},
					{id: "asc"},
				] as any}
			>
				<SelectionProvider type={"multi"}>
					<WireList/>
				</SelectionProvider>
			</WireProviderControl>
		</MobileMarketPage>
	</>;
});
