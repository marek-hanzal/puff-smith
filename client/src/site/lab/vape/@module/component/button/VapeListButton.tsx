import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IVapeListButtonProps extends Partial<IButtonLinkProps> {
}

export const VapeListButton: FC<IVapeListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/vape/list'}
		icon={<ListIcon/>}
		title={'lab.vape.button.list'}
		{...props}
	/>
}
