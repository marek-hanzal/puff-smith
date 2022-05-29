import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/atomizer/delete";
import {useAtomizerInventoryCountQueryInvalidate, useAtomizerInventoryQueryInvalidate} from "@/sdk/api/inventory/atomizer/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAtomizerListToolbarProps extends Partial<IButtonBarProps> {
}

export const AtomizerListToolbar: FC<IAtomizerListToolbarProps> = props => {
	const atomizerInventoryQueryInvalidate = useAtomizerInventoryQueryInvalidate();
	const atomizerInventoryCountQueryInvalidate = useAtomizerInventoryCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.atomizer.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await atomizerInventoryQueryInvalidate();
				await atomizerInventoryCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
