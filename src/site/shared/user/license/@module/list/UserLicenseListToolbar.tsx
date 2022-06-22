import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/user/license/delete";
import {useUserLicenseQueryInvalidate} from "@/sdk/api/user/license/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IUserLicenseListToolbarProps extends Partial<IButtonBarProps> {
}

export const UserLicenseListToolbar: FC<IUserLicenseListToolbarProps> = props => {
	const userLicenseQueryInvalidate = useUserLicenseQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"root.user.license"}
			mutator={useDeleteMutation()}
			invalidator={async () => userLicenseQueryInvalidate()}
		/>
	</ButtonBar>;
};
