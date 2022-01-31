import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface ICoilListButtonProps extends Partial<IButtonLinkProps> {
}

export const CoilListButton: FC<ICoilListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/coil/list'}
		icon={<ListIcon/>}
		title={'lab.coil.button.list'}
		{...props}
	/>
}
