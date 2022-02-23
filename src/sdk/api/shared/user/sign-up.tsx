import {FC} from "react";
import {createPostMutation, Form, IFormProps, ISession} from "@leight-core/leight";

export interface ISignUpRequest {
	readonly name: string;
	readonly login: string;
	readonly password: string;
}

export type ISignUpQueryParams = void;

export const useSignUpMutation = createPostMutation<ISignUpQueryParams, ISignUpRequest, ISession | null>("/api/shared/user/sign-up");

export interface ISignUpDefaultFormProps extends Partial<IFormProps<void, ISignUpRequest, ISession | null>> {
}

export const SignUpDefaultForm: FC<ISignUpDefaultFormProps> = props => <Form<void, ISignUpRequest, ISession | null>
	useMutation={useSignUpMutation}
	{...props}
/>
