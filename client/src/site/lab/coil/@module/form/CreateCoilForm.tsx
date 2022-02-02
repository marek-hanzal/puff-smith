import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, InputNumber, message, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilIcon} from "@/puff-smith";

export interface ICreateCoilFormProps extends Partial<ICreateDefaultFormProps> {
	coil?: CoilDto;
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
			field={'size'}
			labels={['lab.coil.size.label']}
		>
			<Slider
				marks={{
					0.1: 0.1,
					0.15: 0.15,
					0.2: 0.2,
					0.25: 0.25,
					0.3: 0.3,
					0.35: 0.35,
					0.4: 0.4,
				}}
				min={0.1}
				max={0.4}
				step={0.05}
			/>
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
			<Submit icon={<CoilIcon/>} label={'lab.coil.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
