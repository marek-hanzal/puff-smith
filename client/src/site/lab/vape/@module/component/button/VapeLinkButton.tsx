import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeIcon} from "@/puff-smith";

export interface IVapeLinkButtonProps extends Partial<IButtonLinkProps> {
	vape: VapeDto
}

export const VapeLinkButton: FC<IVapeLinkButtonProps> = ({vape, ...props}) => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/vape/[vapeId]'}
		query={{vapeId: vape.id}}
		icon={<VapeIcon/>}
		title={'lab.vape.button.index'}
		{...props}
	/>
}
