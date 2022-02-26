import {FC} from "react";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {Radio} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerSelect} from "../../../atomizer/@module/form/AtomizerSelect";
import {MixtureSelect} from "../../../mixture/@module/form/MixtureSelect";
import {LiquidSelect} from "../../../liquid/@module/form/LiquidSelect";
import {CoilSelect} from "../../../coil/@module/form/CoilSelect";
import {SizeInput} from "../../../coil/@module/form/input/SizeInput";
import {CottonSelect} from "../../../cotton/@module/form/CottonSelect";
import {ModSelect} from "../../../mod/@module/form/ModSelect";
import {WireSelect} from "../../../wire/@module/form/WireSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";

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
		<FormItem
			field={'drawIds'}
			labels={['lab.vape.drawIds.label']}
		>
			<DrawSelect/>
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
