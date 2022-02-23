import {FC} from "react";
import {createPostMutation, Form, IFormProps, ISession} from "@leight-core/leight";

export interface ISignInRequest {
	readonly login: string;
	readonly password: string;
}

export type ISignInQueryParams = void;

export const useSignInMutation = createPostMutation<ISignInQueryParams, ISignInRequest, ISession | null>("/api/shared/user/sign-in");

export interface ISignInDefaultFormProps extends Partial<IFormProps<void, ISignInRequest, ISession | null>> {
}

export const SignInDefaultForm: FC<ISignInDefaultFormProps> = props => <Form<void, ISignInRequest, ISession | null>
	useMutation={useSignInMutation}
	{...props}
/>
