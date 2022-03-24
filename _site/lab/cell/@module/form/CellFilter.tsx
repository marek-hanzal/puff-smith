import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {CellFilterDto} from "@/sdk/puff-smith/voucher/dto";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";

export interface ICellFilterProps extends IFilterWithoutTranslationProps<CellFilterDto> {
}

export const CellFilter: FC<ICellFilterProps> = props => {
	return <Filter<CellFilterDto>
		translation={'lab.voucher'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.voucher.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.voucher.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
