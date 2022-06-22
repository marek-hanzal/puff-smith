import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/atomizer/delete";
import {useAtomizerMarketQueryInvalidate} from "@/sdk/api/market/atomizer/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IAtomizerListToolbarProps extends Partial<IButtonBarProps> {
}

export const AtomizerListToolbar: FC<IAtomizerListToolbarProps> = props => {
	const atomizerMarketQueryInvalidate = useAtomizerMarketQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.atomizer"}
			mutator={useDeleteMutation()}
			invalidator={async () => atomizerMarketQueryInvalidate()}
		/>
	</ButtonBar>;
};
