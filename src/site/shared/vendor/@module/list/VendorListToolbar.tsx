import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/vendor/delete";
import {useVendorCountQueryInvalidate, useVendorQueryInvalidate} from "@/sdk/api/vendor/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IVendorListToolbarProps extends Partial<IButtonBarProps> {
}

export const VendorListToolbar: FC<IVendorListToolbarProps> = props => {
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	const vendorCountQueryInvalidate = useVendorCountQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.vendor"}
			mutator={useDeleteMutation()}
			invalidator={async () => {
				await vendorQueryInvalidate();
				await vendorCountQueryInvalidate();
			}}
		/>
	</ButtonBar>;
};
