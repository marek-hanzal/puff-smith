import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {VendorFilterDto} from "@/sdk/puff-smith/vendor/dto";

export interface IVendorFilterProps extends IFilterWithoutTranslationProps<VendorFilterDto> {
}

export const VendorFilter: FC<IVendorFilterProps> = props => {
	return <Filter<VendorFilterDto>
		translation={'lab.vendor'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.vendor.name.label']}
		/>
	</Filter>
}
