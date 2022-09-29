import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {MobileMarketPage} from "@/puff-smith/site/market/@module/component/MobileMarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AromaList} from "@/puff-smith/ui/aroma/list/AromaList";
import {AromaProviderControl} from "@/sdk/api/aroma/query";
import {CloseOutlined} from "@ant-design/icons";
import {BubbleMenu, ButtonLink, Translate} from "@leight-core/client";
import {Button, Divider} from "antd";

export default withMarketLayout(function Index() {
	return <>
		<MobileMarketPage
			title={"market.aroma.index"}
			icon={<AromaIcon/>}
			onBack={navigate => navigate("/market")}
		>
			<BubbleMenu
				translation={"market.aroma"}
				actions={[
					{
						key: "create.button",
						bold: true,
						onClick: ({navigate}) => navigate("/market/aroma/create"),
					},
				]}
			/>
			<AromaProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				{({filterContext}) => <AromaList
					renderNothing={({sourceContext, cursorContext}) => <>
						<Divider>
							{!cursorContext?.total ? <ButtonLink
								type={"primary"}
								href={"/market/aroma/create"}
								icon={<AromaIcon/>}
								label={"shared.aroma.create.button"}
							/> : null}
							{cursorContext?.total ? <Button
								type={"link"}
								icon={<CloseOutlined/>}
								onClick={() => {
									sourceContext.reset();
									filterContext.setFilter({});
								}}
							>
									<span>
										<Translate namespace={"common.filter"} text={"clear.button"}/>
									</span>
							</Button> : null}
						</Divider>
					</>}
				/>}
			</AromaProviderControl>
		</MobileMarketPage>
	</>;

});
