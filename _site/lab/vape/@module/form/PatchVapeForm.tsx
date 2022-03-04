import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm, usePlotQueryInvalidate, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {message} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, FormItem, Submit} from "@leight-core/common";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {MixtureSelect} from "../../../mixture/@module/form/MixtureSelect";
import {DriptipTooltip} from "../../../driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "../../../driptip/@module/form/DriptipSelect";
import {ModSelect} from "../../../mod/@module/form/ModSelect";
import {PowerSlider} from "@/puff-smith/component/input/PowerSlider";
import {TcSlider} from "@/puff-smith/component/input/TcSlider";

export interface IPatchVapeFormProps extends Partial<IPatchDefaultFormProps> {
	vape: VapeDto;
}

export const PatchVapeForm: FC<IPatchVapeFormProps> = ({vape, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vapeQueryInvalidate = useVapeQueryInvalidate();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	const plotQueryInvalidate = usePlotQueryInvalidate();
	return <PatchDefaultForm
		translation={'lab.vape'}
		toForm={() => ({
			...vape,
		})}
		toMutation={values => ({
			...values,
			...{id: vape.id}
		})}
		onSuccess={response => {
			message.success(t("lab.vape.update.success", {data: response.response}));
			vapeQueryInvalidate();
			vapesQueryInvalidate();
			plotQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<Card title={'lab.vape.common.title'}>
			<FormItem
				field={'mixtureId'}
				required
			>
				<MixtureSelect/>
			</FormItem>
			<FormItem
				field={'modId'}
				required
			>
				<ModSelect/>
			</FormItem>
			<FormItem
				field={'driptipId'}
				help={<DriptipTooltip/>}
			>
				<DriptipSelect allowClear/>
			</FormItem>
		</Card>
		<Card title={'lab.vape.rating.title'}>
			<FormItem
				field={'rating'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Card title={'lab.vape.settings.title'}>
			<FormItem
				field={'power'}
				hasTooltip
			>
				<PowerSlider/>
			</FormItem>
			{vape.build.coil.wire.tc && <FormItem
				field={'tc'}
				hasTooltip
			>
				<TcSlider/>
			</FormItem>}
		</Card>
		<Card title={'lab.vape.rating-advanced.title'}>
			<FormItem
				field={'throathit'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'complex'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fruits'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'tobacco'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'cakes'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fresh'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
		</Card>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}