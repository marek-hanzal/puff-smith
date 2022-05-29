import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/cotton/delete";
import {useCottonInventoryCountQueryInvalidate, useCottonInventoryQueryInvalidate} from "@/sdk/api/inventory/cotton/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICottonListToolbarProps extends Partial<IButtonBarProps> {
}

export const CottonListToolbar: FC<ICottonListToolbarProps> = props => {
	const cottonInventoryQueryInvalidate = useCottonInventoryQueryInvalidate();
	const cottonInventoryCountQueryInvalidate = useCottonInventoryCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.cotton.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await cottonInventoryQueryInvalidate();
				await cottonInventoryCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
