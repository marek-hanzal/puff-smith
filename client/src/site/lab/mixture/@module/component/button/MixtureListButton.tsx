import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IMixtureListButtonProps extends Partial<IButtonLinkProps> {
}

export const MixtureListButton: FC<IMixtureListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/mixture/list'}
		icon={<ListIcon/>}
		title={'lab.mixture.button.list'}
		{...props}
	/>
}
