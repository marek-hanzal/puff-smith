import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/user/certificate/delete";
import {useUserCertificateQueryInvalidate} from "@/sdk/api/user/certificate/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IUserCertificateListToolbarProps extends Partial<IButtonBarProps> {
}

export const UserCertificateListToolbar: FC<IUserCertificateListToolbarProps> = props => {
	const userCertificateQueryInvalidate = useUserCertificateQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"root.user.certificate"}
			mutator={useDeleteMutation()}
			invalidator={async () => userCertificateQueryInvalidate()}
		/>
	</ButtonBar>;
};
