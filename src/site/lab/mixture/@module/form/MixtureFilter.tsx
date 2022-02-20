import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps, SwitchItem} from "@leight-core/leight";
import {MixtureFilterDto} from "@/sdk/puff-smith/mixture/dto";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";
import {BaseSelect} from "@/puff-smith/site/lab/base/@module/form/BaseSelect";
import {BoosterSelect} from "@/puff-smith/site/lab/booster/@module/form/BoosterSelect";

export interface IMixtureFilterProps extends IFilterWithoutTranslationProps<MixtureFilterDto> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = props => {
	return <Filter<MixtureFilterDto>
		{...props}
		translation={'lab.mixture'}
	>
		<FormItem
			field={'name'}
			labels={['lab.mixture.name.label']}
		/>
		<FormItem
			field={'vendorIds'}
			labels={['lab.mixture.vendorId.label']}
		>
			<VendorSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'baseIds'}
			labels={['lab.mixture.baseId.label']}
		>
			<BaseSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'boosterIds'}
			labels={['lab.mixture.boosterId.label']}
		>
			<BoosterSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'code'}
			labels={['lab.mixture.code.label']}
		/>
		<SwitchItem
			field={'active'}
			labels={['lab.mixture.active.label']}
		/>
	</Filter>
}
