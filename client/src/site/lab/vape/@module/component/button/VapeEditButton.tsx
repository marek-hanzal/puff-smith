import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";

export interface IVapeEditButtonProps extends Partial<IButtonLinkProps> {
	vape: VapeDto
}

export const VapeEditButton: FC<IVapeEditButtonProps> = ({vape, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/vape/[vapeId]/edit'}
		query={{vapeId: vape.id}}
		icon={<EditIcon/>}
		title={'lab.vape.button.edit'}
		{...props}
	/>;
}
