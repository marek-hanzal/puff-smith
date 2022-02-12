import {IPatchDefaultFormProps, PatchDefaultForm, useWireQueryInvalidate, useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {WireIcon} from "@/puff-smith";
import {WireDto} from "@/sdk/puff-smith/wire/dto";

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
			field={'description'}
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}