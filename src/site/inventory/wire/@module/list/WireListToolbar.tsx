import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/wire/delete";
import {useWireInventoryQueryInvalidate} from "@/sdk/api/inventory/wire/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IWireListToolbarProps extends Partial<IButtonBarProps> {
}

export const WireListToolbar: FC<IWireListToolbarProps> = props => {
	const wireInventoryQueryInvalidate = useWireInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.wire.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => wireInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
