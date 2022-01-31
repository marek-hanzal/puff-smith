import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";

export interface ICoilEditButtonProps extends Partial<IButtonLinkProps> {
	coil: CoilDto
}

export const CoilEditButton: FC<ICoilEditButtonProps> = ({coil, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/coil/[coilId]/edit'}
		query={{coilId: coil.id}}
		icon={<EditIcon/>}
		title={'lab.coil.button.edit'}
		{...props}
	/>;
}
