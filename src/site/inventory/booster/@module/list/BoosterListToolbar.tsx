import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/booster/delete";
import {useBoosterInventoryCountQueryInvalidate, useBoosterInventoryQueryInvalidate} from "@/sdk/api/inventory/booster/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBoosterListToolbarProps extends Partial<IButtonBarProps> {
}

export const BoosterListToolbar: FC<IBoosterListToolbarProps> = props => {
	const boosterInventoryQueryInvalidate = useBoosterInventoryQueryInvalidate();
	const boosterInventoryCountQueryInvalidate = useBoosterInventoryCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.booster.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await boosterInventoryQueryInvalidate();
				await boosterInventoryCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
