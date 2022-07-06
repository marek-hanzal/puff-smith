import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {ContentInline} from "@/puff-smith/component/inline/ContentInline";
import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Tags} from "@/puff-smith/component/Tags";
import {IMixtureInfo} from "@/puff-smith/service/mixture/utils";
import {CheckCircleOutlined, CloseCircleOutlined, PercentageOutlined} from "@ant-design/icons";
import {Card, Preview, Template, useIsMobile} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {Alert, Col, Divider, Row, Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureInfoViewProps {
	info: IMixtureInfo;
}

export const MixtureInfoView: FC<IMixtureInfoViewProps> = ({info}) => {
	const {t} = useTranslation();
	const isMobile = useIsMobile();
	return <>
		{info.result.error && <Alert type={"error"} message={t(`error.Invalid mixture: ${info.result.error}`)}/>}
		{!info.result.error && <Alert type={"success"} message={t("shared.mixture.info.success")}/>}
		<Divider/>
		<Row>
			<Col span={isMobile ? 24 : 12}>
				<Preview name={"mixture.info"} translation={"shared.mixture.info.result"}>
					{[
						{
							name: "info",
							items: {
								nicotine: <NicotineInline nicotine={info.result.nicotine}/>,
								vgpg: <Space>
									<VgPgInline vgpg={info.result.ratio}/>
									{(info.result.ratio.vg + info.result.ratio.pg) === 100 ? <CheckCircleOutlined style={{color: "green"}}/> : <CloseCircleOutlined style={{color: "red"}}/>}
								</Space>,
								draws: <Tags translation={"common.draw"} color={"gold"} tags={info.result.draws.map(draw => ({
									id: draw,
									code: draw,
									group: "draw",
								}))}/>,
							},
						},
					]}
				</Preview>
			</Col>
			<Col span={isMobile ? 24 : 12}>
				<Preview name={"mixture.info"} translation={"shared.mixture.info.result"}>
					{[
						{
							name: "info",
							items: {
								vgpgToMl: <Space split={"/"}>
									<ContentInline content={info.result.ml.vg}/>
									<ContentInline content={info.result.ml.pg}/>
								</Space>,
								vgpgToRound: <VgPgInline vgpg={info.result.round}/>,
							},
						},
					]}
				</Preview>
			</Col>
		</Row>
		<Divider/>
		<Row>
			<Col span={isMobile ? 24 : 12}>
				<Card title={"shared.mixture.info.aroma.title"}>
					<Preview name={"mixture.info"} translation={"shared.mixture.info.aroma"}>
						{[
							{
								name: "info",
								items: {
									vgpg: <VgPgInline vgpg={info.aroma}/>,
									volume: <ContentInline content={info.aroma.volume}/>,
									content: <ContentInline content={info.aroma.content}/>,
									ratio: <Space size={1}>
										<Typography.Text>{toHumanNumber(info.aroma.ratio, "-", 2)}</Typography.Text>
										<Typography.Text type={"secondary"}><PercentageOutlined/></Typography.Text>
									</Space>,
									available: <ContentInline content={info.available}/>,
								}
							},
						]}
					</Preview>
				</Card>
			</Col>
			<Col span={isMobile ? 24 : 12}>
				<Card title={"shared.mixture.info.booster.title"}>
					{info.booster ? <Preview name={"mixture.info"} translation={"shared.mixture.info.booster"}>
						{[
							{
								name: "info",
								items: {
									vgpg: <VgPgInline vgpg={info.booster}/>,
									info: <Space size={2}>
										<Typography.Text>{info.booster?.count}x</Typography.Text>
										(=<ContentInline content={info.booster?.volume} max={info.available}/>)
									</Space>,
								}
							},
						]}
					</Preview> : <Template
						icon={<BoosterIcon/>}
						label={"shared.mixture.info.booster.empty"}
						span={24}
					/>}
				</Card>
			</Col>
			<Col span={isMobile ? 24 : 12}>
				<Card title={"shared.mixture.info.base.title"}>
					{info.base ? <Preview name={"mixture.info"} translation={"shared.mixture.info.base"}>
						{[
							{
								name: "info",
								items: {
									vgpg: <VgPgInline vgpg={info.base}/>,
									content: <ContentInline content={info.base.volume}/>,
								}
							},
						]}
					</Preview> : info.result.content ? <Template
						icon={<BaseIcon/>}
						status={"warning"}
						label={"shared.mixture.info.base.empty.required"}
						span={24}
					/> : <Template
						icon={<BaseIcon/>}
						label={"shared.mixture.info.base.empty"}
						span={24}
					/>}
				</Card>
			</Col>
		</Row>
	</>;
};
