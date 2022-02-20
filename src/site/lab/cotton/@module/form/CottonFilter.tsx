import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {CottonFilterDto} from "@/sdk/puff-smith/cotton/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface ICottonFilterProps extends IFilterWithoutTranslationProps<CottonFilterDto> {
}

export const CottonFilter: FC<ICottonFilterProps> = props => {
	return <Filter<CottonFilterDto>
		translation={'lab.cotton'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.cotton.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.cotton.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
