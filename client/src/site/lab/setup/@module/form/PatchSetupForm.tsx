import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {SetupDto} from "@/sdk/puff-smith/setup/dto";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {BuildSelect, BuildTooltip} from "@/puff-smith/site/lab/build";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";

export interface IPatchSetupFormProps extends Partial<IPatchDefaultFormProps> {
	setup: SetupDto;
}

export const PatchSetupForm: FC<IPatchSetupFormProps> = ({setup, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		toForm={() => ({
			...setup,
		})}
		toMutation={values => ({
			...values,
			...{id: setup.id}
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.setup.update.success", {data: response}));
			navigate("/lab/setup/[setupId]", {setupId: response.id});
		}}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.setup.name.label']}
			required
		/>
		<FormItem
			field={'description'}
			labels={['lab.setup.description.label']}
		>
			<TextArea autoSize={{minRows: 6, maxRows: 6}}/>
		</FormItem>
		<FormItem
			field={'buildId'}
			labels={['lab.setup.buildId.label']}
			required
			help={<BuildTooltip/>}
		>
			<BuildSelect/>
		</FormItem>
		<FormItem
			field={'modId'}
			labels={['lab.setup.modId.label']}
			required
			help={<ModTooltip/>}
		>
			<ModSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.setup.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
