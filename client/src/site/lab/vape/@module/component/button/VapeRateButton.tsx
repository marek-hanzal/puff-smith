import {FC} from "react";
import {DrawerButton, IDrawerButtonProps, Preview, PreviewTemplate} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeRateForm} from "@/puff-smith/site/lab/vape";
import {DotChartOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import {VapeIcon} from "@/puff-smith";
import {BuildInline} from "@/puff-smith/site/lab/build";
import {MixtureInline} from "@/puff-smith/site/lab/mixture";
import {ModInline} from "@/puff-smith/site/lab/mod";

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
		<PreviewTemplate
			icon={<VapeIcon/>}
		/>
		<Preview width={140} translation={'lab.vape.preview'}>
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
