import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/base/delete";
import {useBaseInventoryQueryInvalidate} from "@/sdk/api/inventory/base/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBaseListToolbarProps extends Partial<IButtonBarProps> {
}

export const BaseListToolbar: FC<IBaseListToolbarProps> = props => {
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.base.inventory"}
			mutator={useDeleteMutation()}
			invalidator={useBaseInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
