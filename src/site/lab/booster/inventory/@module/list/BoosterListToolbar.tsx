import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/booster/inventory/delete";
import {useBoosterInventoryQueryInvalidate} from "@/sdk/api/booster/inventory/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBoosterListToolbarProps extends Partial<IButtonBarProps> {
}

export const BoosterListToolbar: FC<IBoosterListToolbarProps> = props => {
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.booster.inventory"}
			mutator={useDeleteMutation()}
			invalidator={useBoosterInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
