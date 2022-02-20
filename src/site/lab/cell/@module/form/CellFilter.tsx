import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {CellFilterDto} from "@/sdk/puff-smith/cell/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface ICellFilterProps extends IFilterWithoutTranslationProps<CellFilterDto> {
}

export const CellFilter: FC<ICellFilterProps> = props => {
	return <Filter<CellFilterDto>
		translation={'lab.cell'}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.cell.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.cell.vendorId.label']}
		>
			<VendorSelect allowClear mode={'multiple'}/>
		</FormItem>
	</Filter>
}
