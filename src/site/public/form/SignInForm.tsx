import {Centered, FormItem, Input, PasswordInput, SignInIcon, Submit} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ISignInDefaultFormProps, SignInDefaultForm} from "@/sdk/api/shared/user/sign-in";

export interface ISignInFormProps extends ISignInDefaultFormProps {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {t} = useTranslation();
	return <SignInDefaultForm
		size={"large"}
		onSuccess={({navigate, response}) => {
			response && navigate("/" + response.user.site);
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
	</SignInDefaultForm>;
};
