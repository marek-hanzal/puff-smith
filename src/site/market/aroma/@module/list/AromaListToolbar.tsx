import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/aroma/delete";
import {useAromaMarketCountQueryInvalidate, useAromaMarketQueryInvalidate} from "@/sdk/api/market/aroma/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAromaListToolbarProps extends Partial<IButtonBarProps> {
}

export const AromaListToolbar: FC<IAromaListToolbarProps> = props => {
	const aromaMarketQueryInvalidate = useAromaMarketQueryInvalidate();
	const aromaMarketCountQueryInvalidate = useAromaMarketCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.aroma"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await aromaMarketQueryInvalidate();
				await aromaMarketCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
