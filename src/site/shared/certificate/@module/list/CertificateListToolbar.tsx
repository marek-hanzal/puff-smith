import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/certificate/delete";
import {useCertificateCountQueryInvalidate, useCertificateQueryInvalidate} from "@/sdk/api/certificate/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICertificateListToolbarProps extends Partial<IButtonBarProps> {
}

export const CertificateListToolbar: FC<ICertificateListToolbarProps> = props => {
	const certificateQueryInvalidate = useCertificateQueryInvalidate();
	const certificateCountQueryInvalidate = useCertificateCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.certificate"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await certificateQueryInvalidate();
				await certificateCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
