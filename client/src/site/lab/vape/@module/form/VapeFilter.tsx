import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {Radio} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {MixtureSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureSelect";
import {LiquidSelect} from "@/puff-smith/site/lab/liquid/@module/form/LiquidSelect";
import {CoilSelect} from "@/puff-smith/site/lab/coil/@module/form/CoilSelect";
import {SizeInput} from "@/puff-smith/site/lab/coil/@module/form/input/SizeInput";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";
import {WireSelect} from "@/puff-smith/site/lab/wire/@module/form/WireSelect";

export interface IVapeFilterProps extends IFilterWithoutTranslationProps<VapeFilterDto> {
	disabled?: (keyof VapeFilterDto)[]
}

export const VapeFilter: FC<IVapeFilterProps> = ({disabled = [], ...props}) => {
	const {t} = useTranslation();
	return <Filter<VapeFilterDto>
		{...props}
		translation={'lab.vape'}
	>
		{!disabled?.includes('atomizerIds') && <FormItem
			field={'atomizerIds'}
			labels={['lab.vape.atomizerId.label']}
		>
			<AtomizerSelect mode={'multiple'} allowClear/>
		</FormItem>}
		<FormItem
			field={'modIds'}
			labels={['lab.vape.modId.label']}
		>
			<ModSelect mode={'multiple'} allowClear/>
		</FormItem>
		{!disabled?.includes('mixtureIds') && <FormItem
			field={'mixtureIds'}
			labels={['lab.vape.mixtureId.label']}
		>
			<MixtureSelect mode={'multiple'} allowClear/>
		</FormItem>}
		{!disabled?.includes('liquidIds') && <FormItem
			field={'liquidIds'}
			labels={['lab.vape.liquidId.label']}
		>
			<LiquidSelect mode={'multiple'} allowClear/>
		</FormItem>}
		<FormItem
			field={'coilIds'}
			labels={['lab.vape.coilId.label']}
		>
			<CoilSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'cottonIds'}
			labels={['lab.vape.cottonId.label']}
		>
			<CottonSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'wireIds'}
			labels={['lab.vape.wireId.label']}
		>
			<WireSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'coilSizes'}
			labels={['lab.vape.coilSize.label']}
		>
			<SizeInput range/>
		</FormItem>
		{!disabled?.includes('rate') && <FormItem
			field={'rate'}
			labels={['lab.vape.rate.label']}
		>
			<Radio.Group
				options={[
					{label: t('lab.vape.unrated.unrated'), value: 'unrated'},
					{label: t('lab.vape.unrated.rated'), value: 'rated'},
					{label: t('lab.vape.unrated.all'), value: 'all'},
				]}
				optionType={"button"}
				buttonStyle={"solid"}
			/>
		</FormItem>}
	</Filter>
}
