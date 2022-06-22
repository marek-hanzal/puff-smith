import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/base/delete";
import {useBaseMarketQueryInvalidate} from "@/sdk/api/market/base/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBaseListToolbarProps extends Partial<IButtonBarProps> {
}

export const BaseListToolbar: FC<IBaseListToolbarProps> = props => {
	const baseMarketQueryInvalidate = useBaseMarketQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.base"}
			mutator={useDeleteMutation()}
			invalidator={async () => baseMarketQueryInvalidate()}
		/>
	</ButtonBar>;
};
