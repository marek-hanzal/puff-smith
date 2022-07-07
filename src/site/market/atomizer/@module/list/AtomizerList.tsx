import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {AtomizerInventoryCreateButton} from "@/puff-smith/site/market/atomizer/@module/button/AtomizerInventoryCreateButton";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {UserNameInline} from "@/puff-smith/site/shared/user/@module/inline/UserNameInline";
import {AtomizerMarketInfiniteListSource, AtomizerMarketListSource, IAtomizerMarketListSourceProps} from "@/sdk/api/market/atomizer/query";
import {BoolInline, BrowserContent, ButtonLink, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IAtomizerMarketListSourceProps> {
}

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <>
		<BrowserContent>
			<AtomizerMarketListSource
				{...props}
			>
				{({atomizer, isOwned}) => <ListItem
					key={atomizer.id}
					extra={isOwned ? <BoolInline bool={isOwned}/> : <AtomizerInventoryCreateButton type={"link"} atomizer={atomizer}/>}
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
						</Space>}
					/>
				</ListItem>}
			</AtomizerMarketListSource>
		</BrowserContent>
		<MobileContent>
			<AtomizerMarketInfiniteListSource
				withFulltext
			>
				{atomizerMarket => <InfiniteListItem
					key={atomizerMarket.atomizer.id}
					onClick={navigate => navigate("/market/atomizer/[atomizerId]", {atomizerId: atomizerMarket.atomizer.id})}
				>
					<AtomizerNameInline split={null} direction={"vertical"} atomizer={atomizerMarket.atomizer}/>
				</InfiniteListItem>}
			</AtomizerMarketInfiniteListSource>
		</MobileContent>
	</>;
};
