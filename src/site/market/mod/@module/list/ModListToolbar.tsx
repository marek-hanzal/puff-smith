import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useModMarketCountQueryInvalidate, useModMarketQueryInvalidate} from "@/sdk/api/market/mod/query";
import {useDeleteMutation} from "@/sdk/api/mod/delete";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IModListToolbarProps extends Partial<IButtonBarProps> {
}

export const ModListToolbar: FC<IModListToolbarProps> = props => {
	const modMarketQueryInvalidate = useModMarketQueryInvalidate();
	const modMarketCountQueryInvalidate = useModMarketCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.mod"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await modMarketQueryInvalidate();
				await modMarketCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
