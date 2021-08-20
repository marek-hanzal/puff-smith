import {useSessionContext, vapersdream} from "@/vapers-dream";
import {Centered, CommonForm, FormItem, FormSubmitButton, ICommonFormProps, PasswordInput, SignUpIcon, useLayoutBlockContext} from "@leight-core/leight";
import {message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";


export interface ISignUpFormProps extends Partial<ICommonFormProps<any, vapersdream.user.SignUpDto, vapersdream.session.SessionDto>> {
}

export const SignUpForm: FC<ISignUpFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	const {t} = useTranslation();
	return <CommonForm<any, vapersdream.user.SignUpDto, vapersdream.session.SessionDto>
		post={vapersdream.user.doSignUp}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={(navigate, values, session) => {
			blockContext.block();
			setSession(session);
			navigate("/" + session.user.site);
			message.success(t("public.sign-up.success"));
		}}
		{...props}
	>
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
			<PasswordInput/>
		</FormItem>
		<Centered>
			<FormSubmitButton icon={<SignUpIcon/>} size={"large"} label={"public.sign-up.submit.label"}/>
		</Centered>
	</CommonForm>;
};
