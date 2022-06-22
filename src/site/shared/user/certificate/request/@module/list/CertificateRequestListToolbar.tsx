import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/user/certificate/request/delete";
import {useUserCertificateRequestQueryInvalidate} from "@/sdk/api/user/certificate/request/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICertificateRequestListToolbarProps extends Partial<IButtonBarProps> {
}

export const CertificateRequestListToolbar: FC<ICertificateRequestListToolbarProps> = props => {
	const userCertificateRequestQueryInvalidate = useUserCertificateRequestQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"root.user.certificate.request"}
			mutator={useDeleteMutation()}
			invalidator={async () => userCertificateRequestQueryInvalidate()}
		/>
	</ButtonBar>;
};
