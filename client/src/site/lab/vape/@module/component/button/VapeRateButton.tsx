import {FC} from "react";
import {Card, DrawerButton, IDrawerButtonProps, Preview} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DotChartOutlined} from "@ant-design/icons";
import {Col, Row} from "antd";
import {BuildInline} from "@/puff-smith/site/lab/build/@module/component/BuildInline";
import {VapeRateForm} from "@/puff-smith/site/lab/vape/@module/form/VapeRateForm";
import {MixtureInline} from "@/puff-smith/site/lab/mixture/@module/component/MixtureInline";
import {ModInline} from "@/puff-smith/site/lab/mod/@module/component/ModInline";

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
		<Card title={'vape'}>
			<Row>
				<Col span={12}>
					<Preview translation={'lab.vape.preview'}>
						{{
							"build": <BuildInline build={vape.build}/>,
						}}
					</Preview>
				</Col>
				<Col span={12}>
					<Preview translation={'lab.vape.preview'}>
						{{
							"mixture": <MixtureInline mixture={vape.mixture}/>,
							"mod": <ModInline mod={vape.mod}/>,
						}}
					</Preview>
				</Col>
			</Row>
		</Card>
		<VapeRateForm
			vape={vape}
		/>
	</DrawerButton>
}
