import {ICertificate} from "@/puff-smith/service/certificate/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCertificateQueryInvalidate} from "@/sdk/api/certificate/query";
import {useCreateMutation} from "@/sdk/api/user/certificate/create";
import {FC, useState} from "react";

export interface IUserCertificateCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	certificate: ICertificate;
}

export const UserCertificateCreateButton: FC<IUserCertificateCreateButtonProps> = ({certificate, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const certificateQueryInvalidate = useCertificateQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.certificate"}
		type={"link"}
		size={"large"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			certificateId: certificate.id,
		})}
		cost={certificate.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await certificateQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
