import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {BarChartOutlined} from "@ant-design/icons";

export interface IMixturePlotButtonProps extends Partial<IButtonLinkProps> {
	mixture: MixtureDto
}

export const MixturePlotButton: FC<IMixturePlotButtonProps> = ({mixture, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/mixture/[mixtureId]/plot'}
		query={{mixtureId: mixture.id}}
		icon={<BarChartOutlined/>}
		title={'lab.mixture.button.plot'}
		{...props}
	/>;
}
