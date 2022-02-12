import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {FC} from "react";
import {VendorIcon} from "@/puff-smith";
import {VendorLinkButton, VendorPreview} from "@/puff-smith/site/lab/vendor";

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
			<PreviewTemplate
				icon={<VendorIcon/>}
				label={'lab.vendor.preview'}
				title={vendor.name}
				span={24}
			>
				<VendorPreview vendor={vendor}/>
			</PreviewTemplate>
		</DrawerButton>
		<VendorLinkButton title={null} vendor={vendor}/>
	</>
}
