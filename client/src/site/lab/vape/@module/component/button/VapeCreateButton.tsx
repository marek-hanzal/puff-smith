import {ButtonLink, CreateIcon} from "@leight-core/leight";
import {IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface IVapeCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const VapeCreateButton: FC<IVapeCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		href={'/lab/vape/create'}
		icon={<CreateIcon/>}
		title={'lab.vape.button.create'}
		{...props}
	/>;
}
