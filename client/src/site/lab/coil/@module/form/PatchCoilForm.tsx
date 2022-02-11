import {IPatchDefaultFormProps, PatchDefaultForm, useCoilsQueryInvalidate} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilIcon} from "@/puff-smith";
import {SizeInput, WrapsInput} from "@/puff-smith/site/lab/coil";
import {SwitchItem} from "@leight-core/leight/dist";

export interface IPatchCoilFormProps extends Partial<IPatchDefaultFormProps> {
	coil: CoilDto;
}

export const PatchCoilForm: FC<IPatchCoilFormProps> = ({coil, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const coilsQueryInvalidate = useCoilsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.coil'}
		onSuccess={response => {
			message.success(t("lab.coil.update.message", {data: response.response}));
			coilsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...coil,
		})}
		toMutation={values => ({
			...values,
			...{id: coil.id}
		})}
		{...props}
	>
		<FormItem
			field={'wireId'}
			required
			help={<WireTooltip/>}
		>
			<WireSelect/>
		</FormItem>
		<FormItem
			field={'wraps'}
			hasTooltip
			required
		>
			<WrapsInput/>
		</FormItem>
		<FormItem
			field={'size'}
		>
			<SizeInput/>
		</FormItem>
		<SwitchItem field={'spaced'}/>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
