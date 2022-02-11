import {IPatchDefaultFormProps, PatchDefaultForm, useCoilsQueryInvalidate} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilIcon} from "@/puff-smith";
import {SizeInput, WrapsInput} from "@/puff-smith/site/lab/coil";

export interface IPatchCoilFormProps extends Partial<IPatchDefaultFormProps> {
	coil: CoilDto;
}

export const PatchCoilForm: FC<IPatchCoilFormProps> = ({coil, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const coilsQueryInvalidate = useCoilsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
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
			labels={['lab.coil.wireId.label']}
			required
			help={<WireTooltip/>}
		>
			<WireSelect/>
		</FormItem>
		<FormItem
			field={'wraps'}
			labels={['lab.coil.wraps.label']}
			tooltip={t('lab.coil.wraps.label.tooltip')}
			required
		>
			<WrapsInput/>
		</FormItem>
		<FormItem
			field={'size'}
			labels={['lab.coil.size.label']}
		>
			<SizeInput/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={'lab.coil.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
