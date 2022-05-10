import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {BaseInventoryCreateButton} from "@/puff-smith/site/market/base/@module/button/BaseInventoryCreateButton";
import {BaseNameInline} from "@/puff-smith/site/shared/base/@module/inline/BaseNameInline";
import {BaseMarketListSource, IBaseMarketListSourceProps} from "@/sdk/api/base/market/query";
import {BoolInline, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBaseListProps extends Partial<IBaseMarketListSourceProps> {
}

export const BaseList: FC<IBaseListProps> = props => {
	return <BaseMarketListSource
		{...props}
	>
		{({base, isOwned}) => <ListItem key={base.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<BaseNameInline base={base}/>
					<PgVgInline pgvg={base}/>
					{isOwned ? <BoolInline bool={isOwned}/> : <BaseInventoryCreateButton type={"link"} base={base}/>}
				</Space>}
			/>
		</ListItem>}
	</BaseMarketListSource>;
};
