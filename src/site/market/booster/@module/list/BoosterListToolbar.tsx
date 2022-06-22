import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/booster/delete";
import {useBoosterMarketQueryInvalidate} from "@/sdk/api/market/booster/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBoosterListToolbarProps extends Partial<IButtonBarProps> {
}

export const BoosterListToolbar: FC<IBoosterListToolbarProps> = props => {
	const boosterMarketQueryInvalidate = useBoosterMarketQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.booster"}
			mutator={useDeleteMutation()}
			invalidator={async () => boosterMarketQueryInvalidate()}
		/>
	</ButtonBar>;
};
