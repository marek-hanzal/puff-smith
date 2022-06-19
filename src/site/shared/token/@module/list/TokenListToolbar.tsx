import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/token/delete";
import {useTokenCountQueryInvalidate, useTokenQueryInvalidate} from "@/sdk/api/token/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ITokenListToolbarProps extends Partial<IButtonBarProps> {
}

export const TokenListToolbar: FC<ITokenListToolbarProps> = props => {
	const tokenQueryInvalidate = useTokenQueryInvalidate();
	const tokenCountQueryInvalidate = useTokenCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.token"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await tokenQueryInvalidate();
				await tokenCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
