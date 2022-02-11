import {CreateDefaultForm, ICreateDefaultFormProps, useCoilsQueryInvalidate} from "@/sdk/puff-smith/api/lab/coil/endpoint";
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

export const CreateCoilForm: FC<ICreateCoilFormProps> = ({coil, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const coilsQueryInvalidate = useCoilsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.coil'}
		onSuccess={response => {
			message.success(t("lab.coil.created.message", {data: response.response}));
			coilsQueryInvalidate();
			onSuccess?.(response);
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
		<SwitchItem
			field={'spaced'}
		/>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
