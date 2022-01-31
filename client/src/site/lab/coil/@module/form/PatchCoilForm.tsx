import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";

export interface IPatchCoilFormProps extends Partial<IPatchDefaultFormProps> {
	coil: CoilDto;
}

export const PatchCoilForm: FC<IPatchCoilFormProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.coil.update.message", {data: response}));
			navigate("/lab/coil/[coilId]", {coilId: response.id});
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
			field={'code'}
			labels={['lab.coil.code.label']}
			tooltip={t('lab.coil.code.label.tooltip')}
			required
		/>
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
			<InputNumber style={{width: '100%'}} min={3} max={12}/>
		</FormItem>
		<FormItem
			field={'ohm'}
			labels={['lab.coil.ohm.label']}
			tooltip={t('lab.coil.ohm.label.tooltip')}
			required
		>
			<InputNumber style={{width: '100%'}} min={0} max={2}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.coil.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
