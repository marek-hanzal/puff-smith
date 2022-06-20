import {WishlistIcon} from "@/puff-smith/component/icon/WishlistIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {WishlistCreateForm} from "@/puff-smith/site/shared/wishlist/@module/form/WishlistCreateForm";
import {WishlistList} from "@/puff-smith/site/shared/wishlist/@module/list/WishlistList";
import {WishlistProviderControl} from "@/sdk/api/wishlist/query";
import {BlockProvider, DrawerButton, EditIcon, IDrawerButtonProps, TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";
import {FC} from "react";

export interface IWishlistButtonProps extends Partial<IDrawerButtonProps> {
}

export const WishlistButton: FC<IWishlistButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"link"}
		icon={<WishlistIcon/>}
		title={"shared.wishlist.title"}
		width={820}
		{...props}
	>
		<Tabs size={"large"} destroyInactiveTabPane>
			<Tabs.TabPane key={"wishlist"} tab={<TabInline icon={<WishlistIcon/>} title={"shared.wishlist.tab"}/>}>
				<WishlistProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
				>
					<WishlistList/>
				</WishlistProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"create"} tab={<TabInline icon={<EditIcon/>} title={"shared.wishlist.create.tab"}/>}>
				<Template>
					<BlockProvider>
						<WishlistCreateForm/>
					</BlockProvider>
				</Template>
			</Tabs.TabPane>
		</Tabs>
	</DrawerButton>;
};
