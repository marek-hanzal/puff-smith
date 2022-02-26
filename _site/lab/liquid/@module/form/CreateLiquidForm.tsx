import {CreateDefaultForm, ICreateDefaultFormProps, useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/common";
import {PgSlider, VgSlider, VolumeSlider} from "@/puff-smith/component/input";
import {LiquidIcon} from "@/puff-smith";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";

export interface ICreateLiquidFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateLiquidForm: FC<ICreateLiquidFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.liquid'}
		toForm={() => ({
			volume: 15,
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
			<VolumeSlider step={1} max={240}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
