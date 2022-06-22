import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/mod/delete";
import {useModInventoryQueryInvalidate} from "@/sdk/api/inventory/mod/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IModListToolbarProps extends Partial<IButtonBarProps> {
}

export const ModListToolbar: FC<IModListToolbarProps> = props => {
	const modInventoryQueryInvalidate = useModInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.mod.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => modInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
