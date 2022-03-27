import {ILiquidsListSourceProps, LiquidsListSource} from "@/sdk/api/liquid/query";
import {FC} from "react";
import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {LiquidListHeader} from "@/puff-smith/site/lab/liquid";
import {IUser} from "@/puff-smith/service/user";

export interface ILiquidListProps extends Partial<ILiquidsListSourceProps> {
	user?: IUser;
}

export const LiquidList: FC<ILiquidListProps> = ({user, ...props}) => {
	return <LiquidsListSource
		header={() => <LiquidListHeader user={user}/>}
		{...props}
	>
		{liquid => <ListItem key={liquid.id}>
			<ListItemMeta
				title={liquid.name}
				description={toLocalDateTime(liquid.created)}
			/>
		</ListItem>}
	</LiquidsListSource>
}