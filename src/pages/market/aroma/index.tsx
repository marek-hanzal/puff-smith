import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/ui/aroma/list/AromaList";
import {AromaProviderControl} from "@/sdk/api/aroma/query";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.index"}
			icon={<AromaIcon/>}
		>
			<AromaProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<AromaList/>
			</AromaProviderControl>
		</MobileMarketPage>
	</>;
});
