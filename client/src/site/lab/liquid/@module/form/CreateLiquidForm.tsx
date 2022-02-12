import {CreateDefaultForm, ICreateDefaultFormProps, useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {PgSlider, VgSlider} from "@/puff-smith/component/input";
import {LiquidIcon} from "@/puff-smith";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

export interface ICreateLiquidFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateLiquidForm: FC<ICreateLiquidFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.liquid'}
		toForm={() => ({
			pg: 50,
			vg: 50,
		})}
		onSuccess={response => {
			message.success(t("lab.liquid.created.message", {data: response.response}));
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
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
