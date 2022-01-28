import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";

export interface IMixtureEditButtonProps extends Partial<IButtonLinkProps> {
	mixture: MixtureDto
}

export const MixtureEditButton: FC<IMixtureEditButtonProps> = ({mixture, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/mixture/[mixtureId]/edit'}
		query={{mixtureId: mixture.id}}
		icon={<EditIcon/>}
		title={'lab.mixture.button.edit'}
		{...props}
	/>;
}
