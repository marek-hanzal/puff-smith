import {LiquidInline} from "@/puff-smith/ui/liquid/inline/LiquidInline";
import {LiquidListSwipe} from "@/puff-smith/ui/liquid/list/LiquidListSwitpe";
import {ILiquidInfiniteListSourceProps, LiquidInfiniteListSource} from "@/sdk/api/liquid/query";
import {InfiniteListItem} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidListProps extends Partial<ILiquidInfiniteListSourceProps> {
}

export const LiquidList: FC<ILiquidListProps> = props => {
	return <LiquidInfiniteListSource
		withFulltext
		{...props}
	>
		{liquid => <LiquidListSwipe key={liquid.id} liquid={liquid}>
			<InfiniteListItem
				onClick={navigate => navigate("/lab/liquid/[liquidId]", {liquidId: liquid.id})}
			>
				<LiquidInline liquid={liquid}/>
			</InfiniteListItem>
		</LiquidListSwipe>}
	</LiquidInfiniteListSource>;
};
