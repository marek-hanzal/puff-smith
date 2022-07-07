import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {BrowserMarketPage} from "@/puff-smith/site/market/@module/component/BrowserMarketPage";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {BaseList} from "@/puff-smith/site/market/base/@module/list/BaseList";
import {BaseListToolbar} from "@/puff-smith/site/market/base/@module/list/BaseListToolbar";
import {BaseFilter} from "@/puff-smith/site/shared/base/@module/filter/BaseFilter";
import {BaseCreateInline} from "@/puff-smith/site/shared/base/@module/form/BaseCreateInline";
import {BaseProviderControl} from "@/sdk/api/base/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <>
		<BrowserMarketPage
			title={"market.base.index"}
			menuSelection={["/market/base"]}
			icon={<BaseIcon/>}
			extra={<BaseCreateInline
				type={"primary"}
				size={"large"}
				icon={<BaseIcon/>}
			/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/market"}
					icon={<MarketIcon/>}
				/>
				<BreadcrumbIcon
					icon={<BaseIcon/>}
					label={"market.base.label"}
				/>
			</Breadcrumbs>}
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
		</BrowserMarketPage>
		<MobileMarketPage
			title={"market.base.index"}
			menuSelection={["/market/base"]}
			icon={<BaseIcon/>}
			onBack={navigate => navigate("/market")}
		>
		</MobileMarketPage>
	</>;
});
