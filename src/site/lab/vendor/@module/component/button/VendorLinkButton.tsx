import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {VendorIcon} from "@/puff-smith";

export interface IVendorLinkButtonProps extends Partial<IButtonLinkProps> {
	vendor: VendorDto;
}

export const VendorLinkButton: FC<IVendorLinkButtonProps> = ({vendor, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/vendor/[vendorId]'}
		query={{vendorId: vendor.id}}
		icon={<VendorIcon/>}
		title={'lab.vendor.button.index'}
		{...props}
	/>;
}
