import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/ui/aroma/list/AromaList";
import {AromaProviderControl} from "@/sdk/api/aroma/query";
import {BubbleMenu} from "@leight-core/client";
import {Dialog, Toast} from "antd-mobile";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.index"}
			icon={<AromaIcon/>}
		>
			<BubbleMenu
				actions={[
					{
						key: "aaa",
					},
					{text: "foo", key: "aa"},
					{text: "bar", key: "bb"},
					{
						text: "bleh",
						key: "cc",
						onClick: async ({setVisible}) => {
							if (await Dialog.confirm({
								content: "Boo？",
								confirmText: "yep",
								cancelText: "nope",
								onConfirm: () => setVisible(false),
							})) {
								Toast.show({
									icon: "loading",
									duration: 5000,
									maskClickable: false,
								});
							}
						},
					},
				]}
			/>
			<AromaProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<AromaList/>
			</AromaProviderControl>
		</MobileMarketPage>
	</>;
});
