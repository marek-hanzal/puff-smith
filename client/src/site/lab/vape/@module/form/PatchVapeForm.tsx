import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm, usePlotQueryInvalidate, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {message} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {BuildTooltip} from "@/puff-smith/site/lab/build/@module/form/BuildTooltip";
import {BuildSelect} from "@/puff-smith/site/lab/build/@module/form/BuildSelect";
import {MixtureTooltip} from "@/puff-smith/site/lab/mixture/@module/form/MixtureTooltip";
import {MixtureSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {ModTooltip} from "@/puff-smith/site/lab/mod/@module/form/ModTooltip";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";
import {PowerSlider} from "@/puff-smith/component/input/PowerSlider";
import {TcSlider} from "@/puff-smith/component/input/TcSlider";
import {AirflowInput} from "@/puff-smith/component/input/AirflowInput";
import {JuiceFlowInput} from "@/puff-smith/component/input/JuiceFlowInput";

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
				field={'buildId'}
				required
				help={<BuildTooltip/>}
			>
				<BuildSelect/>
			</FormItem>
			<FormItem
				field={'mixtureId'}
				required
				help={<MixtureTooltip/>}
			>
				<MixtureSelect/>
			</FormItem>
			<FormItem
				field={'modId'}
				required
				help={<ModTooltip/>}
			>
				<ModSelect/>
			</FormItem>
			<FormItem
				field={'driptipId'}
				help={<DriptipTooltip/>}
			>
				<DriptipSelect allowClear/>
			</FormItem>
			<FormItem
				field={'leaks'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
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
			<FormItem
				field={'taste'}
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
			<FormItem
				field={'airflow'}
				hasTooltip
				required
			>
				<AirflowInput/>
			</FormItem>
			<FormItem
				field={'juice'}
				hasTooltip
				required
			>
				<JuiceFlowInput/>
			</FormItem>
		</Card>
		<Card title={'lab.vape.vape.title'}>
			<FormItem
				field={'mtl'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'dl'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'clouds'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
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
