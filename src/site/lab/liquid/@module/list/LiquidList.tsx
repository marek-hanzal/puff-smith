import {ILiquidsListSourceProps, LiquidsListSource} from "@/sdk/api/liquid/query";
import {FC} from "react";
import {ListItem, ListItemMeta, Template, toLocalDateTime} from "@leight-core/client";
import {LiquidCreateButton, LiquidListHeader} from "@/puff-smith/site/lab/liquid";
import {IUser} from "@/puff-smith/service/user";
import {LiquidIcon} from "@/puff-smith";
import {Divider} from "antd";

export interface ILiquidListProps extends Partial<ILiquidsListSourceProps> {
	user?: IUser;
}

export const LiquidList: FC<ILiquidListProps> = ({user, ...props}) => {
	return <LiquidsListSource
		header={() => <LiquidListHeader user={user}/>}
		locale={{
			emptyText: <Template
				icon={<LiquidIcon/>}
				label={'lab.liquid.list.empty'}
				extra={<>
					<Divider/>
					<LiquidCreateButton user={user}/>
				</>}
			/>
		}}
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
