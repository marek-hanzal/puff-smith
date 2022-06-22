import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/user/license/request/delete";
import {useUserLicenseRequestQueryInvalidate} from "@/sdk/api/user/license/request/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ILicenseRequestListToolbarProps extends Partial<IButtonBarProps> {
}

export const LicenseRequestListToolbar: FC<ILicenseRequestListToolbarProps> = props => {
	const userLicenseRequestQueryInvalidate = useUserLicenseRequestQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"root.user.license.request"}
			mutator={useDeleteMutation()}
			invalidator={async () => userLicenseRequestQueryInvalidate()}
		/>
	</ButtonBar>;
};
