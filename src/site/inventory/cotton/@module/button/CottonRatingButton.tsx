import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {ICottonInventory} from "@/puff-smith/service/cotton/inventory/interface";
import {useCottonQueryInvalidate} from "@/sdk/api/inventory/cotton/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/cotton/patch";
import {useCottonInventoryQueryInvalidate} from "@/sdk/api/inventory/cotton/query";
import {FC} from "react";

export interface ICottonRatingButtonProps {
	cottonInventory: ICottonInventory;
}

export const CottonRatingButton: FC<ICottonRatingButtonProps> = ({cottonInventory}) => {
	const patchMutation = usePatchMutation();
	const cottonQueryInvalidate = useCottonQueryInvalidate();
	const cottonInventoryQueryInvalidate = useCottonInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.cotton.rating.tooltip"}
		id={cottonInventory.id}
		rating={cottonInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await cottonQueryInvalidate();
			await cottonInventoryQueryInvalidate();
		}}
	/>;
};
