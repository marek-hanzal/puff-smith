import {FC} from "react";
import {DrawerButton, IDrawerButtonProps, Preview} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DotChartOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {BuildInline} from "@/puff-smith/site/lab/build/@module/component/BuildInline";
import {VapeRateForm} from "@/puff-smith/site/lab/vape/@module/form/VapeRateForm";
import {MixtureInline} from "@/puff-smith/site/lab/mixture/@module/component/MixtureInline";

export interface IVapeRateButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapeRateButton: FC<IVapeRateButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<DotChartOutlined/>}
		title={'lab.vape.rate.button'}
		width={700}
		{...props}
	>
		<Preview translation={'lab.vape.preview'}>
			{{
				"build": <BuildInline build={vape.build}/>,
				"mixture": <MixtureInline mixture={vape.mixture}/>,
				"mod": <ModInline mod={vape.mod}/>,
			}}
		</Preview>
		<Divider/>
		<VapeRateForm
			vape={vape}
		/>
	</DrawerButton>
}
