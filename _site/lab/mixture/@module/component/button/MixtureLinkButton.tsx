import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {MixtureIcon} from "@/puff-smith";

export interface IMixtureLinkButtonProps extends Partial<IButtonLinkProps> {
	mixture: MixtureDto
}

export const MixtureLinkButton: FC<IMixtureLinkButtonProps> = ({mixture, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/mixture/[mixtureId]'}
		query={{mixtureId: mixture.id}}
		icon={<MixtureIcon/>}
		title={'lab.mixture.button.index'}
		{...props}
	/>;
}
