import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/aroma/inventory/delete";
import {useAromaInventoryQueryInvalidate} from "@/sdk/api/aroma/inventory/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAromaListToolbarProps extends Partial<IButtonBarProps> {
}

export const AromaListToolbar: FC<IAromaListToolbarProps> = props => {
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.aroma.inventory"}
			mutator={useDeleteMutation()}
			invalidator={useAromaInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
