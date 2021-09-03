import {ps, useSessionContext} from "@/ps";
import {Centered, Form, FormItem, FormSubmitButton, IFormProps, Input, PasswordInput, SignInIcon, useLayoutBlockContext} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ISignInFormProps extends Partial<IFormProps<ps.user.SignInDto, ps.session.SessionDto>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	const {t} = useTranslation();

	return <Form<ps.user.SignInDto, ps.session.SessionDto>
		post={ps.user.doSignIn}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={(navigate, values, session) => {
			blockContext.block();
			setSession(session);
			navigate("/" + session.user.site);
		}}
		toError={_ => ({
			"Bad login.": (_, formContext) => {
				formContext.setErrors({
					errors: [
						{id: "password", error: "public.bad-login.error"},
					]
				});
			}
		})}
		{...props}
	>
		<FormItem
			field={"login"}
			labels={["public.login.label"]}
			hasFeedback
			rules={[
				{required: true, message: t("public.login.required"), whitespace: true}
			]}
		>
			<Input autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"password"}
			labels={["public.password.label"]}
			hasFeedback
			required
		>
			<PasswordInput autoComplete={"current-password"}/>
		</FormItem>
		<Centered>
			<FormSubmitButton icon={<SignInIcon/>} size={"large"} label={"public.sign-in.submit.label"}/>
		</Centered>
	</Form>;
};
