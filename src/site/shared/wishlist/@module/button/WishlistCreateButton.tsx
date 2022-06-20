import {WishlistIcon} from "@/puff-smith/component/icon/WishlistIcon";
import {WishlistCreateForm} from "@/puff-smith/site/shared/wishlist/@module/form/WishlistCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface IWishlistCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const WishlistCreateButton: FC<IWishlistCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.wishlist.create.title"}
		label={"market.wishlist.create.button"}
		icon={<WishlistIcon/>}
		{...props}
	>
		<WishlistCreateForm/>
	</DrawerButton>;
};
