import {ButtonLink, CreateIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface IAtomizerCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const AtomizerCreateButton: FC<IAtomizerCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/atomizer/create'}
		icon={<CreateIcon/>}
		title={'lab.atomizer.button.create'}
		{...props}
	/>;
}
