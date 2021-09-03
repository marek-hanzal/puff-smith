import {ps} from "@/ps";
import {Form, IFormProps} from "@leight-core/leight";
import {FC} from "react";

const doCreate = ps.user.atomizer.doCreate;
type CreateDto = ps.user.atomizer.CreateDto;
type AtomizerDto = ps.atomizer.AtomizerDto;

export interface IAtomizerCreateFormProps extends Partial<IFormProps<CreateDto, AtomizerDto>> {
}

export const AtomizerCreateForm: FC<IAtomizerCreateFormProps> = props => {
	return <Form<CreateDto, AtomizerDto>
		post={doCreate}
	>
	</Form>;
};
