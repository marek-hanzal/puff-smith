import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid";
import {ILiquidsListSourceProps, LiquidsListSource} from "@/sdk/api/liquid/query";
import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidListProps extends Partial<ILiquidsListSourceProps> {
}

export const LiquidList: FC<ILiquidListProps> = props => {
	return <LiquidsListSource
		locale={{
			emptyText: <LiquidListEmpty/>
		}}
		{...props}
	>
		{liquid => <ListItem key={liquid.id}>
			<ListItemMeta
				title={liquid.name}
				description={toLocalDateTime(liquid.created)}
			/>
		</ListItem>}
	</LiquidsListSource>;
};
