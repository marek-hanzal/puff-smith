import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerIcon} from "@/puff-smith";

export interface IAtomizerLinkButtonProps extends Partial<IButtonLinkProps> {
	atomizer: AtomizerDto;
}

export const AtomizerLinkButton: FC<IAtomizerLinkButtonProps> = ({atomizer, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/atomizer/[atomizerId]'}
		query={{atomizerId: atomizer.id}}
		icon={<AtomizerIcon/>}
		title={'lab.atomizer.button.index'}
		{...props}
	/>;
}
