import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/vendor/delete";
import {useVendorQueryInvalidate} from "@/sdk/api/vendor/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface IVendorListToolbarProps extends Partial<IButtonBarProps> {
}

export const VendorListToolbar: FC<IVendorListToolbarProps> = props => {
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.vendor"}
			mutator={useDeleteMutation()}
			invalidator={async () => vendorQueryInvalidate()}
		/>
	</ButtonBar>;
};
