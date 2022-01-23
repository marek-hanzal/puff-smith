import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, Space, Tooltip} from "antd";
import {AtomizerIcon, CoilIcon} from "@/puff-smith";
import {WireInline} from "@/puff-smith/site/lab/wire";
import {useTranslation} from "react-i18next";

export interface IBuildInlineProps {
	build: BuildDto;
}

export const BuildInline: FC<IBuildInlineProps> = ({build}) => {
	const {t} = useTranslation();
	return <Space direction={'vertical'}>
		<Space split={<Divider type={'vertical'}/>}>
			<Tooltip title={t('lab.build.inline.atomizer.tooltip')}><Space size={2}><AtomizerIcon/>{build.atomizer.name}</Space></Tooltip>
			<Tooltip title={t('lab.build.inline.wraps.tooltip')}><Space size={2}><CoilIcon/>{build.coil.wraps}</Space></Tooltip>
			<Space size={2}>{build.ohm.toFixed(2)}ohm</Space>
		</Space>
		<WireInline wire={build.coil.wire}/>
	</Space>
}