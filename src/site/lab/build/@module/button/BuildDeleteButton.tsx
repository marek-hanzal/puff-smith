import {DeleteConfirmButton, IDeleteConfirmButtonProps} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/lab/build/delete";
import {useBuildQueryInvalidate} from "@/sdk/api/lab/build/query";
import {FC} from "react";

export interface IBuildDeleteButtonProps extends Partial<IDeleteConfirmButtonProps> {

}

export const BuildDeleteButton: FC<IBuildDeleteButtonProps> = props => {
	const buildQueryInvalidate = useBuildQueryInvalidate();
	return <DeleteConfirmButton
		translation={"lab.build"}
		mutator={useDeleteMutation()}
		invalidator={async () => buildQueryInvalidate()}
		{...props}
	/>;
};
