import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {CoilIcon} from "@/puff-smith";

export interface ICoilLinkButtonProps extends Partial<IButtonLinkProps> {
	coil: CoilDto
}

export const CoilLinkButton: FC<ICoilLinkButtonProps> = ({coil, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/coil/[coilId]'}
		query={{coilId: coil.id}}
		icon={<CoilIcon/>}
		title={'lab.coil.button.index'}
		{...props}
	/>;
}
