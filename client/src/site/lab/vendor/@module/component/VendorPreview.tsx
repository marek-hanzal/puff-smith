import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {VendorInline} from "@/puff-smith/site/lab/vendor";

export interface IVendorPreviewProps extends Partial<IPreviewProps> {
	vendor: VendorDto;
}

export const VendorPreview: FC<IVendorPreviewProps> = ({vendor, ...props}) => {
	return <Preview translation={'lab.vendor.preview'} {...props}>
		{{
			"name": <VendorInline vendor={vendor}/>,
		}}
	</Preview>
}
