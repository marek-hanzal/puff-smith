import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeIcon} from "@/puff-smith";

export interface IVapeLinkProps extends Partial<IButtonLinkProps> {
	vape: VapeDto
}

export const VapeLink: FC<IVapeLinkProps> = ({vape, ...props}) => {
	return <ButtonLink
		size={'middle'}
		type={'link'}
		href={'/lab/vape/[vapeId]'}
		query={{vapeId: vape.id}}
		icon={<VapeIcon/>}
		title={vape.id}
		{...props}
	/>;
}
