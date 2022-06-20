import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/wishlist/delete";
import {useWishlistCountQueryInvalidate, useWishlistQueryInvalidate} from "@/sdk/api/wishlist/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IWishlistListToolbarProps extends Partial<IButtonBarProps> {
}

export const WishlistListToolbar: FC<IWishlistListToolbarProps> = props => {
	const wishlistQueryInvalidate = useWishlistQueryInvalidate();
	const wishlistCountQueryInvalidate = useWishlistCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.wishlist"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await wishlistQueryInvalidate();
				await wishlistCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
