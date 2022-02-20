import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DotChartOutlined} from "@ant-design/icons";
import {VapeRateForm} from "@/puff-smith/site/lab/vape/@module/form/VapeRateForm";

export interface IVapeRateButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapeRateButton: FC<IVapeRateButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<DotChartOutlined/>}
		title={'lab.vape.rate.button'}
		width={750}
		{...props}
	>
		<VapeRateForm
			vape={vape}
		/>
	</DrawerButton>
}
