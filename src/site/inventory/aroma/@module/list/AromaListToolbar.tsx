import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/aroma/delete";
import {useAromaInventoryQueryInvalidate} from "@/sdk/api/inventory/aroma/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAromaListToolbarProps extends Partial<IButtonBarProps> {
}

export const AromaListToolbar: FC<IAromaListToolbarProps> = props => {
	const aromaInventoryQueryInvalidate = useAromaInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.aroma.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => aromaInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
