import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/cotton/delete";
import {useCottonInventoryQueryInvalidate} from "@/sdk/api/inventory/cotton/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICottonListToolbarProps extends Partial<IButtonBarProps> {
}

export const CottonListToolbar: FC<ICottonListToolbarProps> = props => {
	const cottonInventoryQueryInvalidate = useCottonInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.cotton.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => cottonInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
