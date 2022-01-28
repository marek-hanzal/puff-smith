import {FC} from "react";
import {FormItem} from "@leight-core/leight";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer";
import {Filter, IFilterProps} from "@/puff-smith";
import {ModSelect} from "@/puff-smith/site/lab/mod";
import {MixtureSelect} from "@/puff-smith/site/lab/mixture";
import {CoilSelect} from "@/puff-smith/site/lab/coil";
import {LiquidSelect} from "@/puff-smith/site/lab/liquid";

export interface IVapeFilterProps extends Omit<IFilterProps, "translation"> {
}

export const VapeFilter: FC<IVapeFilterProps> = (props) => {
	return <Filter
		{...props}
		translation={'lab.vape'}
	>
		<FormItem
			field={'atomizerIds'}
			labels={['lab.vape.atomizerId.label']}
		>
			<AtomizerSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'modIds'}
			labels={['lab.vape.modId.label']}
		>
			<ModSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'mixtureIds'}
			labels={['lab.vape.mixtureId.label']}
		>
			<MixtureSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'liquidIds'}
			labels={['lab.vape.liquidId.label']}
		>
			<LiquidSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'coilIds'}
			labels={['lab.vape.coilId.label']}
		>
			<CoilSelect mode={'multiple'} allowClear/>
		</FormItem>
	</Filter>
}
