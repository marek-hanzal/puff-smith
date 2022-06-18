import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {ICellInventory} from "@/puff-smith/service/cell/inventory/interface";
import {useCellQueryInvalidate} from "@/sdk/api/inventory/cell/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/inventory/cell/patch";
import {useCellInventoryQueryInvalidate} from "@/sdk/api/inventory/cell/query";
import {FC} from "react";

export interface ICellRatingButtonProps {
	cellInventory: ICellInventory;
}

export const CellRatingButton: FC<ICellRatingButtonProps> = ({cellInventory}) => {
	const patchMutation = usePatchMutation();
	const cellQueryInvalidate = useCellQueryInvalidate();
	const cellInventoryQueryInvalidate = useCellInventoryQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.cell.rating.tooltip"}
		id={cellInventory.id}
		rating={cellInventory.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await cellQueryInvalidate();
			await cellInventoryQueryInvalidate();
		}}
	/>;
};
