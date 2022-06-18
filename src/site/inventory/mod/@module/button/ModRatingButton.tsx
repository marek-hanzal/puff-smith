import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IModInventory} from "@/puff-smith/service/mod/inventory/interface";
import {useModQueryInvalidate} from "@/sdk/api/inventory/mod/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/mod/patch";
import {useModInventoryQueryInvalidate} from "@/sdk/api/inventory/mod/query";
import {FC} from "react";

export interface IModRatingButtonProps {
	modInventory: IModInventory;
}

export const ModRatingButton: FC<IModRatingButtonProps> = ({modInventory}) => {
	const patchMutation = usePatchMutation();
	const modQueryInvalidate = useModQueryInvalidate();
	const modInventoryQueryInvalidate = useModInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.mod.rating.tooltip"}
		id={modInventory.id}
		rating={modInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await modQueryInvalidate();
			await modInventoryQueryInvalidate();
		}}
	/>;
};
