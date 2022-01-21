import {
	Form,
	IFormProps,
	createPostMutation,
	createPostQuery
} from "@leight-core/leight";
import {useQueryClient} from "react-query";
import {FC} from "react";

export type ICreateQueryParams = void;


export const useCreateMutation = createPostMutation<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>("PuffSmith.Lab.Build.Create");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => {
	return <Form<ICreateQueryParams, import("@/sdk/puff-smith/build/dto/create/index").CreateDto, import("@/sdk/puff-smith/build/dto/index").BuildDto>
		useMutation={useCreateMutation}
		{...props}
	/>
}