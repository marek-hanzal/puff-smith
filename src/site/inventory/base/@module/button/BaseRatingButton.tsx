import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IBaseInventory} from "@/puff-smith/service/base/inventory/interface";
import {useBaseQueryInvalidate} from "@/sdk/api/inventory/base/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/base/patch";
import {useBaseInventoryQueryInvalidate} from "@/sdk/api/inventory/base/query";
import {FC} from "react";

export interface IBaseRatingButtonProps {
	baseInventory: IBaseInventory;
}

export const BaseRatingButton: FC<IBaseRatingButtonProps> = ({baseInventory}) => {
	const patchMutation = usePatchMutation();
	const baseQueryInvalidate = useBaseQueryInvalidate();
	const baseInventoryQueryInvalidate = useBaseInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.base.rating.tooltip"}
		id={baseInventory.id}
		rating={baseInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await baseQueryInvalidate();
			await baseInventoryQueryInvalidate();
		}}
	/>;
};
