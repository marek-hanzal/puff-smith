import {useSessionContext} from "@/ps";
import {SessionDto} from "@/ps/sdk/session";
import {doSignUp, SignUpDto} from "@/ps/sdk/user";
import {Centered, Form, FormItem, IFormProps, PasswordInput, SignUpIcon, Submit, useLayoutBlockContext} from "@leight-core/leight";
import {message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ISignUpFormProps extends Partial<IFormProps<SignUpDto, SessionDto>> {
}

export const SignUpForm: FC<ISignUpFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	const {t} = useTranslation();

	return <Form<SignUpDto, SessionDto>
		post={doSignUp}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={(navigate, values, session) => {
			blockContext.block();
			setSession(session);
			navigate("/" + session.user.site);
			message.success(t("public.sign-up.success"));
		}}
		toError={error => ({
			"Unique conflict on [user.user_login_unique].": {id: "login", error: error},
		})}
		{...props}
	>
		<FormItem
			field={"name"}
			labels={["public.name.label"]}
			rules={[
				{required: true, message: t("public.name.required"), whitespace: true}
			]}
		/>
		<FormItem
			field={"login"}
			labels={["public.login.label"]}
			rules={[
				{required: true, message: t("public.login.required"), whitespace: true}
			]}
		/>
		<FormItem
			field={"password"}
			labels={["public.password.label"]}
			hasFeedback
			required
		>
			<PasswordInput autoComplete={"new-password"}/>
		</FormItem>
		<FormItem
			field={"password2"}
			labels={["public.password2.label"]}
			dependencies={["password"]}
			hasFeedback
			required
			rules={[
				({getFieldValue}) => ({
					validator(_, value) {
						if (!value || getFieldValue("password") === value) {
							return Promise.resolve();
						}
						return Promise.reject(new Error(t("public.password2.not-match")));
					},
				}),
			]}
		>
			<PasswordInput autoComplete={"new-password"}/>
		</FormItem>
		<Centered>
			<Submit icon={<SignUpIcon/>} size={"large"} label={"public.sign-up.submit.label"}/>
		</Centered>
	</Form>;
};
