import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";

export interface ICreateCoilFormProps extends Partial<ICreateDefaultFormProps> {
	coil: CoilDto;
}

export const CreateCoilForm: FC<ICreateCoilFormProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.coil.created.message", {data: response}));
			navigate("/lab/coil/list");
		}}
		toForm={() => ({
			...coil,
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
			<Submit label={'lab.coil.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
