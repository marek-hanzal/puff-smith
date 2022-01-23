import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/setup/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {BuildSelect, BuildTooltip} from "@/puff-smith/site/lab/build";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";
import {useTranslation} from "react-i18next";

export interface ICreateSetupFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateSetupForm: FC<ICreateSetupFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.setup.created.message", {data: response}));
			navigate("/lab/setup/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_setup_name_unique] of [z_setup].": {id: ["name"], error},
		})}
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
			<Submit label={'lab.setup.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
