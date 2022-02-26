import {Centered, FormItem, Input, PasswordInput, SignUpIcon, Submit} from "@leight-core/common";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ISignUpDefaultFormProps, SignUpDefaultForm} from "@/sdk/api/shared/user/sign-up";

export interface ISignUpFormProps extends ISignUpDefaultFormProps {
}

export const SignUpForm: FC<ISignUpFormProps> = props => {
	const {t} = useTranslation();
	return <SignUpDefaultForm
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={({navigate, response}) => {
			response && navigate("/" + response.user.site);
		}}
		toError={({error}) => ({
			"Unknown login": (({formContext}) => {
				formContext.setErrors({
					errors: [
						{id: "login", error: "Who are you?"},
					],
				});
			}),
			"Duplicate entry [z_user_email_unique] of [z_user].": (({formContext}) => {
				formContext.setErrors({
					errors: [
						{id: "email", error},
					],
				});
			}),
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
	</SignUpDefaultForm>;
};
