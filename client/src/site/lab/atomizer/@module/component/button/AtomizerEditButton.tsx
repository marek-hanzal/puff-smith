import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";

export interface IAtomizerEditButtonProps extends Partial<IButtonLinkProps> {
	atomizer: AtomizerDto
}

export const AtomizerEditButton: FC<IAtomizerEditButtonProps> = ({atomizer, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/atomizer/[atomizerId]/edit'}
		query={{atomizerId: atomizer.id}}
		icon={<EditIcon/>}
		title={'lab.atomizer.button.edit'}
		{...props}
	/>;
}
