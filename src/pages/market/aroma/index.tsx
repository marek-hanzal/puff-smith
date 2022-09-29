import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/ui/aroma/list/AromaList";
import {AromaListNothing} from "@/puff-smith/ui/aroma/list/AromaListNothing";
import {AromaIndexBubble} from "@/puff-smith/ui/aroma/menu/AromaIndexBubble";
import {AromaProviderControl} from "@/sdk/api/aroma/query";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.index"}
			icon={<AromaIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<AromaIndexBubble/>
			<AromaProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<AromaList
					renderNothing={() => <AromaListNothing/>}
				/>
			</AromaProviderControl>
		</MobileMarketPage>
	</>;
});
