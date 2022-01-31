import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CloneIcon} from "@/puff-smith";

export interface ICoilCloneButtonProps extends Partial<IButtonLinkProps> {
	coil: CoilDto;
}

export const CoilCloneButton: FC<ICoilCloneButtonProps> = ({coil, ...props}) => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/coil/[coilId]/clone'}
		query={{coilId: coil.id}}
		icon={<CloneIcon/>}
		title={'lab.coil.button.clone'}
		{...props}
	/>
}
