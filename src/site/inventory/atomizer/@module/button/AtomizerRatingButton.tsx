import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IAtomizerInventory} from "@/puff-smith/service/atomizer/inventory/interface";
import {useAtomizerQueryInvalidate} from "@/sdk/api/inventory/atomizer/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/atomizer/patch";
import {useAtomizerInventoryQueryInvalidate} from "@/sdk/api/inventory/atomizer/query";
import {FC} from "react";

export interface IAtomizerRatingButtonProps {
	atomizerInventory: IAtomizerInventory;
}

export const AtomizerRatingButton: FC<IAtomizerRatingButtonProps> = ({atomizerInventory}) => {
	const patchMutation = usePatchMutation();
	const atomizerQueryInvalidate = useAtomizerQueryInvalidate();
	const atomizerInventoryQueryInvalidate = useAtomizerInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.atomizer.rating.tooltip"}
		id={atomizerInventory.id}
		rating={atomizerInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await atomizerQueryInvalidate();
			await atomizerInventoryQueryInvalidate();
		}}
	/>;
};
