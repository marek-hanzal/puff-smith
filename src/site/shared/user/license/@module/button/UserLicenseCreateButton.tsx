import {ILicense} from "@/puff-smith/service/license/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useLicenseQueryInvalidate} from "@/sdk/api/license/query";
import {useCreateMutation} from "@/sdk/api/user/license/create";
import {FC, useState} from "react";

export interface IUserLicenseCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	license: ILicense;
}

export const UserLicenseCreateButton: FC<IUserLicenseCreateButtonProps> = ({license, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const licenseQueryInvalidate = useLicenseQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.license"}
		type={"link"}
		size={"large"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			licenseId: license.id,
		})}
		cost={license.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await licenseQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
