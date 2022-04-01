import {FC} from "react";
import {Space, Tooltip, Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IPgVgInlineProps {
	pgvg: { pg: number; vg: number };
}

export const PgVgInline: FC<IPgVgInlineProps> = ({pgvg}) => {
	const {t} = useTranslation();
	return <Space size={4} split={<Typography.Text type={'secondary'}>/</Typography.Text>}>
		<Typography.Text type={'success'}>
			<Tooltip title={t('common.pgvg.pg.tooltip')}>
				{pgvg.pg}
			</Tooltip>
		</Typography.Text>
		<Typography.Text type={'warning'}>
			<Tooltip title={t('common.pgvg.vg.tooltip')}>
				{pgvg.vg}
			</Tooltip>
		</Typography.Text>
	</Space>
}
