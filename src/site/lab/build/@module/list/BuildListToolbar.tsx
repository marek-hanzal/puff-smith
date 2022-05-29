import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/lab/build/delete";
import {useBuildCountQueryInvalidate, useBuildQueryInvalidate} from "@/sdk/api/lab/build/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IBuildListToolbarProps extends Partial<IButtonBarProps> {
}

export const BuildListToolbar: FC<IBuildListToolbarProps> = props => {
	const buildQueryInvalidate = useBuildQueryInvalidate();
	const buildCountQueryInvalidate = useBuildCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.build"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await buildQueryInvalidate();
				await buildCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
