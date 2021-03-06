import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/cotton/delete";
import {useCottonMarketQueryInvalidate} from "@/sdk/api/market/cotton/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICottonListToolbarProps extends Partial<IButtonBarProps> {
}

export const CottonListToolbar: FC<ICottonListToolbarProps> = props => {
	const cottonMarketQueryInvalidate = useCottonMarketQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.cotton"}
			mutator={useDeleteMutation()}
			invalidator={async () => cottonMarketQueryInvalidate()}
		/>
	</ButtonBar>;
};
