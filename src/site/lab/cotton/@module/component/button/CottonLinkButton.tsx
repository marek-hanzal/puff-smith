import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {CottonIcon} from "@/puff-smith";

export interface ICottonLinkButtonProps extends Partial<IButtonLinkProps> {
	cotton: CottonDto;
}

export const CottonLinkButton: FC<ICottonLinkButtonProps> = ({cotton, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/cotton/[cottonId]'}
		query={{cottonId: cotton.id}}
		icon={<CottonIcon/>}
		title={'lab.cotton.button.index'}
		{...props}
	/>;
}
