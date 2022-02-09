import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilIcon} from "@/puff-smith";
import {SizeInput, WrapsInput} from "@/puff-smith/site/lab/coil";
import {SwitchItem} from "@leight-core/leight/dist";

export interface ICreateCoilFormProps extends Partial<ICreateDefaultFormProps> {
	coil?: CoilDto;
}

export const CreateCoilForm: FC<ICreateCoilFormProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		layout={'vertical'}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.coil.created.message", {data: response}));
			navigate("/lab/coil/list");
		}}
		toForm={() => ({
			wraps: 7,
			size: 0.3,
			spaced: false,
			...coil,
		})}
		{...props}
	>
		<FormItem
			field={'wireId'}
			labels={'lab.coil.wireId.label'}
			required
			help={<WireTooltip/>}
		>
			<WireSelect/>
		</FormItem>
		<FormItem
			field={'wraps'}
			labels={'lab.coil.wraps.label'}
			tooltip={t('lab.coil.wraps.label.tooltip')}
			required
		>
			<WrapsInput/>
		</FormItem>
		<FormItem
			field={'size'}
			labels={'lab.coil.size.label'}
		>
			<SizeInput/>
		</FormItem>
		<SwitchItem
			field={'spaced'}
			labels={['lab.coil.spaced.label']}
		/>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={'lab.coil.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
