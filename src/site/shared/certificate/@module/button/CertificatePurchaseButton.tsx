import {ICertificate} from "@/puff-smith/service/certificate/interface";
import {ITransactionModalButtonProps} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/inventory/aroma/create";
import {FC} from "react";

export interface ICertificatePurchaseButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	certificate: ICertificate;
}

export const CertificatePurchaseButton: FC<ICertificatePurchaseButtonProps> = ({certificate, disabled, ...props}) => {
	return null;
	// const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	// return <TransactionModalButton<typeof useCreateMutation>
	// 	translation={"market.certificate"}
	// 	useCreateMutation={useCreateMutation}
	// 	toMutate={() => ({
	// 		certificateId: certificate.id,
	// 	})}
	// 	cost={certificate.cost}
	// 	onOk={() => setEnabled(false)}
	// 	onSuccess={async () => {
	// 		await aromasMarketQueryInvalidate();
	// 	}}
	// 	disabled={!enabled}
	// 	{...props}
	// />;
};
