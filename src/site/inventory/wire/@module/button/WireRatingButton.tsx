import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IWireInventory} from "@/puff-smith/service/wire/inventory/interface";
import {useWireQueryInvalidate} from "@/sdk/api/inventory/wire/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/wire/patch";
import {useWireInventoryQueryInvalidate} from "@/sdk/api/inventory/wire/query";
import {FC} from "react";

export interface IWireRatingButtonProps {
	wireInventory: IWireInventory;
}

export const WireRatingButton: FC<IWireRatingButtonProps> = ({wireInventory}) => {
	const patchMutation = usePatchMutation();
	const wireQueryInvalidate = useWireQueryInvalidate();
	const wireInventoryQueryInvalidate = useWireInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.wire.rating.tooltip"}
		id={wireInventory.id}
		rating={wireInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await wireQueryInvalidate();
			await wireInventoryQueryInvalidate();
		}}
	/>;
};
