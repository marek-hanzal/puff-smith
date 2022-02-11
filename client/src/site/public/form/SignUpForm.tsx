import {Centered, Form, FormItem, IFormProps, Input, PasswordInput, SignUpIcon, Submit} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {SessionDto} from "@/sdk/edde/session/dto";
import {SignUpDto} from "@/sdk/puff-smith/api/shared/user/endpoint/dto";
import {useSignUpMutation} from "@/sdk/puff-smith/api/shared/user/endpoint";

export interface ISignUpFormProps extends Partial<IFormProps<void, SignUpDto, SessionDto>> {
}

export const SignUpForm: FC<ISignUpFormProps> = props => {
	const {t} = useTranslation();
	return <Form<void, SignUpDto, SessionDto>
		useMutation={useSignUpMutation}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={({navigate, response}) => {
			navigate("/" + response.user.site);
		}}
		toError={() => ({
			"Unknown login": (({formContext}) => {
				formContext.setErrors({
					errors: [
						{id: "login", error: "Who are you?"},
					],
				});
			})
		})}
		{...props}
	>
		<FormItem
			field={"name"}
			required
			labels={['user.name.label']}
			tooltip={t('user.name.label.tooltip')}
			rules={[
				{required: true, whitespace: false, message: t("user.name.label.required")},
			]}
		>
			<Input autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"email"}
			required
			labels={['user.email.label']}
			tooltip={t('user.email.label.tooltip')}
			rules={[
				{required: true, whitespace: false, message: t("user.email.label.required")},
			]}
		>
			<Input autoComplete={"email"}/>
		</FormItem>
		<FormItem
			field={"password"}
			required
			hasFeedback
			labels={['user.password.label']}
		>
			<PasswordInput autoComplete={"password"}/>
		</FormItem>
		<FormItem
			field={"password2"}
			required
			hasFeedback
			labels={['user.password2.label']}
			rules={[
				{
					required: true,
					message: t("user.password2.label.required"),
				},
				({getFieldValue}) => ({
					validator(_, value) {
						if (!value || getFieldValue('password') === value) {
							return Promise.resolve();
						}
						return Promise.reject(new Error(t('user.password2.label.mismatch')));
					},
				}),
			]}
		>
			<PasswordInput autoComplete={"password"}/>
		</FormItem>
		<Centered>
			<Submit icon={<SignUpIcon/>} size={"large"} label={"public.sign-up.form.submit.label"}/>
		</Centered>
	</Form>;
};
