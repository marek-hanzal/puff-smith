import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {PlotIcon} from "@/puff-smith";

export interface IAtomizerPlotButtonProps extends Partial<IButtonLinkProps> {
	atomizer: AtomizerDto
}

export const AtomizerPlotButton: FC<IAtomizerPlotButtonProps> = ({atomizer, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/atomizer/[atomizerId]/plot'}
		query={{atomizerId: atomizer.id}}
		icon={<PlotIcon/>}
		title={'lab.atomizer.button.plot'}
		{...props}
	/>;
}
