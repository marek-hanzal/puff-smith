import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/booster/delete";
import {useBoosterMarketCountQueryInvalidate, useBoosterMarketQueryInvalidate} from "@/sdk/api/market/booster/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBoosterListToolbarProps extends Partial<IButtonBarProps> {
}

export const BoosterListToolbar: FC<IBoosterListToolbarProps> = props => {
	const boosterMarketQueryInvalidate = useBoosterMarketQueryInvalidate();
	const boosterMarketCountQueryInvalidate = useBoosterMarketCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.booster"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await boosterMarketQueryInvalidate();
				await boosterMarketCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
