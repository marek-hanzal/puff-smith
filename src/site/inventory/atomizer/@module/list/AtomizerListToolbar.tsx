import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/atomizer/delete";
import {useAtomizerInventoryQueryInvalidate} from "@/sdk/api/inventory/atomizer/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAtomizerListToolbarProps extends Partial<IButtonBarProps> {
}

export const AtomizerListToolbar: FC<IAtomizerListToolbarProps> = props => {
	const atomizerInventoryQueryInvalidate = useAtomizerInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.atomizer.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => atomizerInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
