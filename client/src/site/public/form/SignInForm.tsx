import {useSessionContext} from "@/ps";
import {SessionDto} from "@/sdk/shared/session";
import {doSignIn, SignInDto} from "@/sdk/shared/user";
import {Centered, Form, FormItem, IFormProps, Input, PasswordInput, SignInIcon, Submit, useLayoutBlockContext} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ISignInFormProps extends Partial<IFormProps<SignInDto, SessionDto>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	const {t} = useTranslation();

	return <Form<SignInDto, SessionDto>
		post={doSignIn}
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
			<Submit icon={<SignInIcon/>} size={"large"} label={"public.sign-in.submit.label"}/>
		</Centered>
	</Form>;
};
