import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {MixtureIcon} from "@/puff-smith";

export interface IMixtureLinkProps extends Partial<IButtonLinkProps> {
	mixture: MixtureDto
}

export const MixtureLink: FC<IMixtureLinkProps> = ({mixture, ...props}) => {
	return <ButtonLink
		size={'middle'}
		type={'link'}
		href={'/lab/mixture/[mixtureId]'}
		query={{mixtureId: mixture.id}}
		icon={<MixtureIcon/>}
		title={'lab.mixture.button.index'}
		{...props}
	/>;
}
