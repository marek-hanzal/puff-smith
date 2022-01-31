import {ButtonLink, CreateIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface ICoilCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const CoilCreateButton: FC<ICoilCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/coil/create'}
		icon={<CreateIcon/>}
		title={'lab.coil.button.create'}
		{...props}
	/>;
}
