import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IAtomizerListButtonProps extends Partial<IButtonLinkProps> {
}

export const AtomizerListButton: FC<IAtomizerListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/atomizer/list'}
		icon={<ListIcon/>}
		title={'lab.atomizer.button.list'}
		{...props}
	/>
}
