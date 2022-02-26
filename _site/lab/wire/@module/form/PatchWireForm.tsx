import {IPatchDefaultFormProps, PatchDefaultForm, useWireQueryInvalidate, useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/common";
import {GaInput, WireIcon} from "@/puff-smith";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";

export interface IPatchWireFormProps extends Partial<IPatchDefaultFormProps> {
	wire: WireDto;
}

export const PatchWireForm: FC<IPatchWireFormProps> = ({onSuccess, wire, ...props}) => {
	const {t} = useTranslation();
	const wireQueryInvalidate = useWireQueryInvalidate()
	const wiresQueryInvalidate = useWiresQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.wire'}
		onSuccess={response => {
			message.success(t("lab.wire.updated.message", {data: response.response}));
			wireQueryInvalidate();
			wiresQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => wire}
		toMutation={values => ({
			id: wire.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_wire_name_unique] of [z_wire].": {id: ["name"], error},
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
			field={'description'}
		/>
		<FormItem
			field={'ga'}
		>
			<GaInput/>
		</FormItem>
		<SwitchItem
			field={'tc'}
		/>
		<FormItem
			field={'drawIds'}
		>
			<DrawSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
