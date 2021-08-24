import {ps, useSessionContext} from "@/ps";
import {Centered, CommonForm, FormItem, FormSubmitButton, ICommonFormProps, Input, PasswordInput, SignInIcon, useLayoutBlockContext} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ISignInFormProps extends Partial<ICommonFormProps<any, ps.user.SignInDto, ps.session.SessionDto>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {setSession} = useSessionContext();
	const blockContext = useLayoutBlockContext();
	const {t} = useTranslation();

	return <CommonForm<any, ps.user.SignInDto, ps.session.SessionDto>
		post={ps.user.doSignIn}
		size={"large"}
		wrapperCol={{span: 24}}
		onSuccess={(navigate, values, session) => {
			blockContext.block();
			setSession(session);
			navigate("/" + session.user.site);
		}}
		{...props}
	>
		<FormItem
			field={"login"}
			labels={["public.login.label"]}
			rules={[
				{required: true, message: t("public.login.required"), whitespace: true}
			]}
		>
			<Input autoComplete={"username"}/>
		</FormItem>
		<FormItem
			field={"password"}
			labels={["public.password.label"]}
			required
		>
			<PasswordInput autoComplete={"current-password"}/>
		</FormItem>
		<Centered>
			<FormSubmitButton icon={<SignInIcon/>} size={"large"} label={"public.sign-in.submit.label"}/>
		</Centered>
	</CommonForm>;
};
