import {ButtonLink, CreateIcon} from "@leight-core/leight";
import {IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface IMixtureCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const MixtureCreateButton: FC<IMixtureCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		href={'/lab/mixture/create'}
		icon={<CreateIcon/>}
		title={'lab.mixture.button.create'}
		{...props}
	/>;
}
