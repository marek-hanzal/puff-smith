import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Col, Divider, List, Row, Typography} from "antd";
import {ButtonLink, Card, Template} from "@leight-core/leight";
import {BuildIcon, VapeIcon} from "@/puff-smith";
import {BuildsSource, BuildsSourceConsumer} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {VapesSource, VapesSourceConsumer} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BuildCreateButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCreateButton";
import {BuildListItem} from "@/puff-smith/site/lab/build/@module/table/BuildListItem";
import {VapeCreateButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeCreateButton";
import {VapeListItem} from "@/puff-smith/site/lab/vape/@module/table/VapeListItem";
import {VapePlotButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapePlotButton";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";

export interface IQuickPuffProps {
}

export const QuickPuff: FC<IQuickPuffProps> = () => {
	const {t} = useTranslation();
	return <Row gutter={0}>
		<Col span={8}>
			<Card
				title={'lab.quick-puff.builds.title'}
				extra={<>
					<ButtonLink type={'link'} href={'/lab/build'} icon={<BuildIcon/>}/>
					<BuildCreateButton/>
				</>}
				bordered={false}
			>
				<Typography.Title level={5}>{t('lab.quick-puff.builds.subtitle')}</Typography.Title>
				<Divider/>
				<BuildsSource defaultSize={3} filter={{active: true}}>
					<BuildsSourceConsumer>
						{sourceContext => sourceContext.hasData() ? <List>
							{sourceContext.map(build => <BuildListItem
								key={build.id}
								build={build}
								quickMenuProps={{
									onCreateVape: () => null,
								}}
							/>)}
						</List> : <Template
							icon={<BuildIcon/>}
							label={'lab.quick-puff.no-builds'}
						/>}
					</BuildsSourceConsumer>
				</BuildsSource>
			</Card>
		</Col>
		<Col span={8}>
			<Card
				title={'lab.quick-puff.vapes.title'}
				extra={<>
					<ButtonLink type={'link'} href={'/lab/vape'} icon={<VapeIcon/>}/>
					<VapeCreateButton/>
				</>}
				bordered={false}
			>
				<Typography.Title level={5}>{t('lab.quick-puff.vapes.subtitle')}</Typography.Title>
				<Divider/>
				<VapesSource defaultSize={3}>
					<VapesSourceConsumer>
						{sourceContext => sourceContext.hasData() ? <List>
							{sourceContext.map(vape => <VapeListItem key={vape.id} vape={vape}/>)}
						</List> : <Template
							icon={<VapeIcon/>}
							label={'lab.quick-puff.no-vapes'}
						/>}
					</VapesSourceConsumer>
				</VapesSource>
			</Card>
		</Col>
		<Col span={8}>
			<Card
				title={'lab.quick-puff.plot.title'}
				extra={<>
					<VapePlotButton/>
				</>}
				bordered={false}
			>
				<VapePlot selected={['median']}/>
			</Card>
		</Col>
	</Row>;
}
