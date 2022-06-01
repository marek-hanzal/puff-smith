import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useWireMarketCountQueryInvalidate, useWireMarketQueryInvalidate} from "@/sdk/api/market/wire/query";
import {useDeleteMutation} from "@/sdk/api/wire/delete";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IWireListToolbarProps extends Partial<IButtonBarProps> {
}

export const WireListToolbar: FC<IWireListToolbarProps> = props => {
	const wireMarketQueryInvalidate = useWireMarketQueryInvalidate();
	const wireMarketCountQueryInvalidate = useWireMarketCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.wire"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await wireMarketQueryInvalidate();
				await wireMarketCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
