import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CloneIcon} from "@/puff-smith";

export interface IVapeCloneButtonProps extends Partial<IButtonLinkProps> {
	vape: VapeDto
}

export const VapeCloneButton: FC<IVapeCloneButtonProps> = ({vape, ...props}) => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/vape/[vapeId]/clone'}
		query={{vapeId: vape.id}}
		icon={<CloneIcon/>}
		title={'lab.vape.button.clone'}
		{...props}
	/>
}
