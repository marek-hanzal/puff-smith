import {IPatchDefaultFormProps, PatchDefaultForm, useLiquidQueryInvalidate, useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {PgSlider, VgSlider, VolumeSlider} from "@/puff-smith/component/input";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {LiquidIcon} from "@/puff-smith";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface IPatchLiquidFormProps extends Partial<IPatchDefaultFormProps> {
	liquid: LiquidDto;
}

export const PatchLiquidForm: FC<IPatchLiquidFormProps> = ({liquid, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidQueryInvalidate = useLiquidQueryInvalidate();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.liquid'}
		toForm={() => ({
			...liquid,
		})}
		toMutation={values => ({
			id: liquid.id,
			...values,
		})}
		onSuccess={response => {
			message.success(t("lab.liquid.updated.message", {data: response.response}));
			liquidQueryInvalidate();
			liquidsQueryInvalidate();
			onSuccess?.(response);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_liquid_name_unique] of [z_liquid].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'description'}
		>
			<TextArea autoSize={{minRows: 6, maxRows: 6}}/>
		</FormItem>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<FormItem
			field={'pg'}
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
			field={'volume'}
			required
		>
			<VolumeSlider step={1} max={240}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
