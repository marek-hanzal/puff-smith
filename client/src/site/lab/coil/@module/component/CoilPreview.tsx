import {FC} from "react";
import {BoolInline, IPreviewProps, Preview} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Col, Row, Tabs} from "antd";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";
import {Ohm} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {BuildsFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildFilter} from "@/puff-smith/site/lab/build/@module/form/BuildFilter";
import {BuildTable} from "@/puff-smith/site/lab/build/@module/table/BuildTable";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {useOptionalDrawerContext} from "@leight-core/leight/dist";

export interface ICoilPreviewProps extends Partial<IPreviewProps> {
	coil: CoilDto;
}

export const CoilPreview: FC<ICoilPreviewProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	const isDrawer = !!useOptionalDrawerContext();
	return <Tabs size={'large'}>
		<Tabs.TabPane key={'common'} tab={t('lab.coil.common.tab')}>
			<Row>
				<Col span={12}>
					<Preview translation={'lab.coil.preview'} {...props}>
						{{
							wire: <WireInline wire={coil.wire}/>,
							ohm: coil.ohm && <Ohm ohm={coil.ohm}/>,
							nominalOhm: coil.nominalOhm && <Ohm ohm={coil.nominalOhm}/>,
						}}
					</Preview>
				</Col>
				<Col span={12}>
					<Preview translation={'lab.coil.preview'} {...props}>
						{{
							wraps: <CoilWraps noTooltip wraps={coil.wraps}/>,
							size: <CoilSize noTooltip size={coil.size}/>,
							spaced: <BoolInline bool={coil.spaced}/>,
						}}
					</Preview>
				</Col>
			</Row>
		</Tabs.TabPane>
		<Tabs.TabPane key={'builds'} tab={t('lab.coil.builds.tab')}>
			<BuildsFilterContext defaultFilter={{coilIds: [coil.id]}}>
				<BuildFilter disabled={['coilIds']}/>
				<BuildTable forceList={isDrawer} hidden={['coil']}/>
			</BuildsFilterContext>
		</Tabs.TabPane>
	</Tabs>
}
