import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {FC} from "react";
import {VendorIcon} from "@/puff-smith";
import {VendorPreview} from "@/puff-smith/site/lab/vendor/@module/component/VendorPreview";
import {VendorLinkButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorLinkButton";

export interface IVendorPreviewButtonProps extends Partial<IDrawerButtonProps> {
	vendor: VendorDto;
}

export const VendorPreviewButton: FC<IVendorPreviewButtonProps> = ({vendor, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<VendorIcon/>}
			title={'lab.vendor.preview'}
			{...props}
		>
			<VendorPreview vendor={vendor}/>
		</DrawerButton>
		<VendorLinkButton title={null} vendor={vendor}/>
	</>
}
