import {LoginRequest} from "@/sdk/edde/dto/common";
import {Centered, Form, FormItem, IFormProps, Input, PasswordInput, SignInIcon, Submit} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {SessionDto} from "@/sdk/edde/session/dto";
import {useLoginMutation} from "@/sdk/edde/api/shared/user/endpoint";

export interface ISignInFormProps extends Partial<IFormProps<void, LoginRequest, SessionDto>> {
}

export const SignInForm: FC<ISignInFormProps> = props => {
	const {t} = useTranslation();
	return <Form<void, LoginRequest, SessionDto>
		useMutation={useLoginMutation}
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
			field={"login"}
			required
			rules={[
				{required: true, whitespace: false, message: t("public.sign-in.login.required")},
			]}
		>
			<Input autoComplete={"username"}/>
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
