import {Centered, Form, FormItem, IFormProps, Input, ISession, PasswordInput, SignInIcon, Submit} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ISignInRequest} from "@/puff-smith/pages/api/shared/user/sign-in";

export interface ISignInFormProps extends Partial<IFormProps<void, ISignInRequest, ISession>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {t} = useTranslation();
	return <Form<void, ISignInRequest, ISession>
		// useMutation={useLoginMutation}
		size={"large"}
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
			field={"login"}
			required
			rules={[
				{required: true, whitespace: false, message: t("public.sign-in.login.required")},
			]}
		>
			<Input autoFocus autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"password"}
			required
		>
			<PasswordInput autoComplete={"current-password"}/>
		</FormItem>
		<Centered>
			<Submit icon={<SignInIcon/>} size={"large"} label={"public.sign-in.form.submit.label"}/>
		</Centered>
	</Form>;
};
