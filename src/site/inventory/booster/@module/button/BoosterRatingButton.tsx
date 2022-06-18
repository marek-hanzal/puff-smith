import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IBoosterInventory} from "@/puff-smith/service/booster/inventory/interface";
import {useBoosterQueryInvalidate} from "@/sdk/api/inventory/booster/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/booster/patch";
import {useBoosterInventoryQueryInvalidate} from "@/sdk/api/inventory/booster/query";
import {FC} from "react";

export interface IBoosterRatingButtonProps {
	boosterInventory: IBoosterInventory;
}

export const BoosterRatingButton: FC<IBoosterRatingButtonProps> = ({boosterInventory}) => {
	const patchMutation = usePatchMutation();
	const boosterQueryInvalidate = useBoosterQueryInvalidate();
	const boosterInventoryQueryInvalidate = useBoosterInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.booster.rating.tooltip"}
		id={boosterInventory.id}
		rating={boosterInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await boosterQueryInvalidate();
			await boosterInventoryQueryInvalidate();
		}}
	/>;
};
