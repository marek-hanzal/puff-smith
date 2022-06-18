import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IAromaInventory} from "@/puff-smith/service/aroma/inventory/interface";
import {useAromaQueryInvalidate} from "@/sdk/api/inventory/aroma/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/aroma/patch";
import {useAromaInventoryQueryInvalidate} from "@/sdk/api/inventory/aroma/query";
import {FC} from "react";

export interface IAromaRatingButtonProps {
	aromaInventory: IAromaInventory;
}

export const AromaRatingButton: FC<IAromaRatingButtonProps> = ({aromaInventory}) => {
	const patchMutation = usePatchMutation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const aromaInventoryQueryInvalidate = useAromaInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.aroma.rating.tooltip"}
		id={aromaInventory.id}
		rating={aromaInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await aromaQueryInvalidate();
			await aromaInventoryQueryInvalidate();
		}}
	/>;
};
