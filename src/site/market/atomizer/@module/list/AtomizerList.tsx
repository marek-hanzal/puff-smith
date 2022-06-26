import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerInventoryCreateButton} from "@/puff-smith/site/market/atomizer/@module/button/AtomizerInventoryCreateButton";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {UserNameInline} from "@/puff-smith/site/shared/user/@module/inline/UserNameInline";
import {AtomizerMarketListSource, IAtomizerMarketListSourceProps} from "@/sdk/api/market/atomizer/query";
import {BoolInline, ButtonLink, ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IAtomizerMarketListSourceProps> {
}

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <AtomizerMarketListSource
		{...props}
	>
		{({atomizer, isOwned}) => <ListItem
			key={atomizer.id}
		>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={atomizer}/>
					<ButtonLink
						size={"small"}
						href={"/market/atomizer/[atomizerId]"}
						query={{atomizerId: atomizer.id}}
						label={<AtomizerNameInline atomizer={atomizer}/>}
					/>
					{atomizer.user && <UserNameInline user={atomizer.user}/>}
					{atomizer.draws.length > 0 && <Tags tags={atomizer.draws} translation={"common.draw"}/>}
					{isOwned ? <BoolInline bool={isOwned}/> : <AtomizerInventoryCreateButton type={"link"} atomizer={atomizer}/>}
				</Space>}
			/>
		</ListItem>}
	</AtomizerMarketListSource>;
};
