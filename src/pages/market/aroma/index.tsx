import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/ui/aroma/list/AromaList";
import {AromaProviderControl} from "@/sdk/api/aroma/query";
import {ActionSheet, Dialog, FloatingBubble, Toast} from "antd-mobile";
import {AddOutline} from "antd-mobile-icons";
import {useState} from "react";

export default withMarketLayout(function Index() {
	const [visible, setVisible] = useState(false);
	return <>
		<MobileMarketPage
			title={"market.aroma.index"}
			icon={<AromaIcon/>}
		>
			<ActionSheet
				visible={visible}
				actions={[
					{text: "foo", key: "aa"},
					{text: "bar", key: "bb"},
					{
						text: "bleh", key: "cc", onClick: async () => {
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
						}
					},
				]}
				onClose={() => setVisible(false)}
			/>
			<FloatingBubble
				axis="x"
				magnetic="x"
				style={{
					"--initial-position-bottom": "24px",
					"--initial-position-right": "24px",
					"--edge-distance": "24px",
				}}
				onClick={() => setVisible(true)}
			>
				<AddOutline fontSize={32}/>
			</FloatingBubble>
			<AromaProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<AromaList/>
			</AromaProviderControl>
		</MobileMarketPage>
	</>;
});
