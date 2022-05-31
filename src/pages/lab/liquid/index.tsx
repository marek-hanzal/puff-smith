import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {LiquidFilter} from "@/puff-smith/site/lab/liquid/@module/filter/LiquidFilter";
import {LiquidList} from "@/puff-smith/site/lab/liquid/@module/list/LiquidList";
import {LiquidListToolbar} from "@/puff-smith/site/lab/liquid/@module/list/LiquidListToolbar";
import {LiquidProviderControl} from "@/sdk/api/lab/liquid/query";
import {SelectionProvider} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.liquid.index"}
		menuSelection={["/lab/liquid"]}
		icon={<LiquidIcon/>}
	>
		<LiquidProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				mixed: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<LiquidList
					header={() => <RowInline
						extra={<LiquidListToolbar/>}
					>
						<LiquidFilter/>
					</RowInline>}
				/>
			</SelectionProvider>
		</LiquidProviderControl>
	</LabPage>;
});
