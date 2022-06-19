import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/license/delete";
import {useLicenseCountQueryInvalidate, useLicenseQueryInvalidate} from "@/sdk/api/license/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ILicenseListToolbarProps extends Partial<IButtonBarProps> {
}

export const LicenseListToolbar: FC<ILicenseListToolbarProps> = props => {
	const licenseQueryInvalidate = useLicenseQueryInvalidate();
	const licenseCountQueryInvalidate = useLicenseCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.license"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await licenseQueryInvalidate();
				await licenseCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
