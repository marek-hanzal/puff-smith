import {ButtonLink, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BarChartOutlined} from "@ant-design/icons";

export interface IBuildPlotButtonProps extends Partial<IButtonLinkProps> {
	build: BuildDto
}

export const BuildPlotButton: FC<IBuildPlotButtonProps> = ({build, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/build/[buildId]/plot'}
		query={{buildId: build.id}}
		icon={<BarChartOutlined/>}
		title={'lab.build.button.plot'}
		{...props}
	/>;
}
