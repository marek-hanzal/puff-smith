import {IAroma} from "@/puff-smith/service/aroma";
import {FC} from "react";
import {Space, Tooltip, Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IAromaContentInlineProps {
	aroma: IAroma;
}

export const AromaContentInline: FC<IAromaContentInlineProps> = ({aroma}) => {
	const {t} = useTranslation();
	return <Space size={4} split={'/'}>
		<Tooltip title={t('common.aroma.content.tooltip')}>
			<Typography.Text>{aroma.content}ml</Typography.Text>
		</Tooltip>
		<Tooltip title={t('common.aroma.volume.tooltip')}>
			<Typography.Text type={'secondary'}>{aroma.volume ? `${aroma.volume}ml` : '-'}</Typography.Text>
		</Tooltip>
	</Space>
}
