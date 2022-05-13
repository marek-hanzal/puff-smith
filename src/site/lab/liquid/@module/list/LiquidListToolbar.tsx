import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/liquid/delete";
import {useLiquidQueryInvalidate} from "@/sdk/api/liquid/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ILiquidListToolbarProps extends Partial<IButtonBarProps> {
}

export const LiquidListToolbar: FC<ILiquidListToolbarProps> = props => {
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.liquid"}
			mutator={useDeleteMutation()}
			invalidator={useLiquidQueryInvalidate()}
		/>
	</ButtonBar>;
};
