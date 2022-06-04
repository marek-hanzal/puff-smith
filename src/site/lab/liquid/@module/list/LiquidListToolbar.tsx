import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {useDeleteMutation} from "@/sdk/api/lab/liquid/delete";
import {useLiquidCountQueryInvalidate, useLiquidQueryInvalidate} from "@/sdk/api/lab/liquid/query";
import {ButtonBar, ButtonLink, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ILiquidListToolbarProps extends Partial<IButtonBarProps> {
}

export const LiquidListToolbar: FC<ILiquidListToolbarProps> = props => {
	const liquidQueryInvalidate = useLiquidQueryInvalidate();
	const liquidCountQueryInvalidate = useLiquidCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.liquid"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await liquidQueryInvalidate();
				await liquidCountQueryInvalidate();
			}}
		/>
		<ButtonLink
			type={"primary"}
			icon={<LiquidIcon/>}
			href={"/lab/liquid/create"}
			label={"lab.liquid.create.button"}
		/>
	</ButtonBar>;
};
