import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight/dist";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, InputNumber} from "antd";
import {useTranslation} from "react-i18next";

export interface ICreateCoilFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateCoilForm: FC<ICreateCoilFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm {...props}>
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
			field={'ohm'}
			labels={['lab.coil.ohm.label']}
			tooltip={t('lab.coil.ohm.label.tooltip')}
			required
		>
			<InputNumber style={{width: '100%'}} min={0} max={4}/>
		</FormItem>
		<FormItem
			field={'wraps'}
			labels={['lab.coil.wraps.label']}
			tooltip={t('lab.coil.wraps.label.tooltip')}
			required
		>
			<InputNumber style={{width: '100%'}} min={3} max={16}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.coil.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
