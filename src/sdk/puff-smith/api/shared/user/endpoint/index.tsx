import {createPostMutation, Form, IFormProps} from "@leight-core/leight";
import {FC} from "react";

export type ISignUpQueryParams = void;


export const useSignUpMutation = createPostMutation<ISignUpQueryParams, import("@/sdk/puff-smith/api/shared/user/endpoint/dto/index").SignUpDto, import("@/sdk/edde/session/dto/index").SessionDto>("PuffSmith.Shared.User.SignUp");

export interface ISignUpDefaultFormProps extends Partial<IFormProps<ISignUpQueryParams, import("@/sdk/puff-smith/api/shared/user/endpoint/dto/index").SignUpDto, import("@/sdk/edde/session/dto/index").SessionDto>> {
}

export const SignUpDefaultForm: FC<ISignUpDefaultFormProps> = props => {
	return <Form<ISignUpQueryParams, import("@/sdk/puff-smith/api/shared/user/endpoint/dto/index").SignUpDto, import("@/sdk/edde/session/dto/index").SessionDto>
		useMutation={useSignUpMutation}
		{...props}
	/>
}
