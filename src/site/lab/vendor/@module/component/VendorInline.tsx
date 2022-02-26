import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {Space} from "antd";
import {FC} from "react";
import {useIsMobile} from "@leight-core/common";

export interface IVendorInlineProps {
	vendor: VendorDto;
}

export const VendorInline: FC<IVendorInlineProps> = ({vendor}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{vendor.name}
	</Space>;
}
