import {NicotineInline, PgVgInline} from "@/puff-smith";
import {LiquidListEmpty} from "@/puff-smith/site/lab/liquid";
import {LiquidNameInline} from "@/puff-smith/site/shared/liquid";
import {ILiquidsListSourceProps, LiquidsListSource} from "@/sdk/api/liquid/query";
import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {Divider, Space} from "antd";
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
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<LiquidNameInline liquid={liquid}/>
					<PgVgInline pgvg={liquid}/>
					<NicotineInline nicotine={liquid.nicotine}/>
				</Space>}
				description={toLocalDateTime(liquid.mixed)}
			/>
		</ListItem>}
	</LiquidsListSource>;
};
