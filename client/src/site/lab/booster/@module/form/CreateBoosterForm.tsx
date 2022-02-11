import {CreateDefaultForm, ICreateDefaultFormProps, useBoostersQueryInvalidate} from "@/sdk/puff-smith/api/lab/booster/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message, Slider} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {BoosterIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ICreateBoosterFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBoosterForm: FC<ICreateBoosterFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const boostersQueryInvalidate = useBoostersQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.booster'}
		onSuccess={response => {
			message.success(t("lab.booster.create.success", {data: response.response}));
			boostersQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			nicotine: 6,
			volume: 10,
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'pg'}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'nicotine'}
			required
		>
			<Slider
				marks={{
					0: 0,
					3: 3,
					6: 6,
					9: 9,
					12: 12,
					16: 16,
					18: 18,
					20: 20,
				}}
				min={0}
				max={20}
				step={1}
			/>
		</FormItem>
		<FormItem
			field={'volume'}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<BoosterIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
