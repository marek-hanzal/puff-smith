import {toHumanNumber} from "@leight-core/client";
import {Space, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IPgVgInlineProps {
	pgvg?: { pg: number; vg: number };
	disableTooltip?: boolean;
}

export const PgVgInline: FC<IPgVgInlineProps> = ({pgvg, disableTooltip = false}) => {
	const {t} = useTranslation();
	return pgvg ? <Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
		<Typography.Text type={"success"}>
			<Tooltip title={!disableTooltip && t("common.pgvg.vg.tooltip")}>
				{toHumanNumber(pgvg.vg)}%
			</Tooltip>
		</Typography.Text>
		<Typography.Text type={"warning"}>
			<Tooltip title={!disableTooltip && t("common.pgvg.pg.tooltip")}>
				{toHumanNumber(pgvg.pg)}%
			</Tooltip>
		</Typography.Text>
	</Space> : <>-</>;
};
