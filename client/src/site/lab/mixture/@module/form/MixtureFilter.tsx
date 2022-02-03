import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps, SwitchItem} from "@leight-core/leight";
import {Rate} from "antd";
import {VendorSelect} from "@/puff-smith/site/lab/vendor";
import {BoosterSelect} from "@/puff-smith/site/lab/booster";
import {BaseSelect} from "@/puff-smith/site/lab/base";
import {MixtureFilterDto} from "@/sdk/puff-smith/mixture/dto";

export interface IMixtureFilterProps extends IFilterWithoutTranslationProps<MixtureFilterDto> {
}

export const MixtureFilter: FC<IMixtureFilterProps> = props => {
	return <Filter<MixtureFilterDto>
		{...props}
		translation={'lab.mixture'}
	>
		<FormItem
			field={'rating'}
			labels={['lab.mixture.rating.label']}
		>
			<Rate count={10}/>
		</FormItem>
		<FormItem
			field={'name'}
			labels={['lab.mixture.name.label']}
		/>
		<FormItem
			field={'code'}
			labels={['lab.mixture.code.label']}
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
		<SwitchItem
			field={'active'}
			labels={['lab.mixture.active.label']}
		/>
	</Filter>
}
