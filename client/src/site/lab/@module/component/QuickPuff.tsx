import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Card, Col, List, Row, Typography} from "antd";
import {ButtonLink} from "@leight-core/leight";
import {BuildIcon, VapeIcon} from "@/puff-smith";
import {BuildCreateButton, BuildListItem} from "@/puff-smith/site/lab/build";
import {BuildsSource, BuildsSourceConsumer} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {VapeCreateButton, VapeListItem, VapePlot, VapePlotButton} from "@/puff-smith/site/lab/vape";
import {VapesSource, VapesSourceConsumer} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export interface IQuickPuffProps {
}

export const QuickPuff: FC<IQuickPuffProps> = () => {
	const {t} = useTranslation();
	return <Row gutter={32}>
		<Col span={8}>
			<Card
				title={t('lab.quick-puff.builds.title')}
				extra={<>
					<ButtonLink type={'link'} href={'/lab/build'} icon={<BuildIcon/>}/>
					<BuildCreateButton/>
				</>}
			>
				<Typography.Title level={5}>{t('lab.quick-puff.builds.subtitle')}</Typography.Title>
				<BuildsSource defaultSize={3} filter={{active: true}}>
					<BuildsSourceConsumer>
						{sourceContext => sourceContext.hasData() && <List>
							{sourceContext.map(build => <BuildListItem
								key={build.id}
								build={build}
								quickMenuProps={{
									onCreateVape: () => null,
								}}
							/>)}
						</List>}
					</BuildsSourceConsumer>
				</BuildsSource>
			</Card>
		</Col>
		<Col span={8}>
			<Card
				title={t('lab.quick-puff.vapes.title')}
				extra={<>
					<ButtonLink type={'link'} href={'/lab/vape'} icon={<VapeIcon/>}/>
					<VapeCreateButton/>
				</>}
			>
				<Typography.Title level={5}>{t('lab.quick-puff.vapes.subtitle')}</Typography.Title>
				<VapesSource defaultSize={3}>
					<VapesSourceConsumer>
						{sourceContext => sourceContext.hasData() && <List>
							{sourceContext.map(vape => <VapeListItem key={vape.id} vape={vape}/>)}
						</List>}
					</VapesSourceConsumer>
				</VapesSource>
			</Card>
		</Col>
		<Col span={8}>
			<Card
				title={t('lab.quick-puff.plot.title')}
				extra={<>
					<VapePlotButton/>
				</>}
			>
				<VapePlot selected={['median']}/>
			</Card>
		</Col>
	</Row>;
}
