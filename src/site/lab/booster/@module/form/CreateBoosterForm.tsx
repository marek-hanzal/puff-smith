import {CreateDefaultForm, ICreateDefaultFormProps, useBoostersQueryInvalidate} from "@/sdk/puff-smith/api/lab/booster/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {BoosterIcon, NicotineSlider, PgSlider, VgSlider, VolumeSlider} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

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
			pg: 50,
			vg: 50,
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
			rules={[
				({setFieldsValue}) => ({
					validator(_, value) {
						setFieldsValue({
							'vg': 100 - value,
						});
						return Promise.resolve();
					},
				}),
			]}
		>
			<PgSlider/>
		</FormItem>
		<FormItem
			field={'vg'}
			required
			rules={[
				({setFieldsValue}) => ({
					validator(_, value) {
						setFieldsValue({
							'pg': 100 - value,
						});
						return Promise.resolve();
					},
				}),
			]}
		>
			<VgSlider/>
		</FormItem>
		<FormItem
			field={'nicotine'}
			required
		>
			<NicotineSlider/>
		</FormItem>
		<FormItem
			field={'volume'}
			required
		>
			<VolumeSlider/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<BoosterIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
