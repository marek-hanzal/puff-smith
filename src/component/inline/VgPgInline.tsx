import {toHumanNumber} from "@leight-core/utils";
import {Space, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IPgVgInlineProps {
	vgpg?: { pg: number; vg: number };
	disableTooltip?: boolean;
}

export const VgPgInline: FC<IPgVgInlineProps> = ({vgpg, disableTooltip = false}) => {
	const {t} = useTranslation();
	return vgpg ? <Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
		<Typography.Text type={"success"}>
			<Tooltip title={!disableTooltip && t("common.pgvg.vg.tooltip")}>
				{toHumanNumber(vgpg.vg, "-", 3)}%
			</Tooltip>
		</Typography.Text>
		<Typography.Text type={"warning"}>
			<Tooltip title={!disableTooltip && t("common.pgvg.pg.tooltip")}>
				{toHumanNumber(vgpg.pg, "-", 3)}%
			</Tooltip>
		</Typography.Text>
	</Space> : <>-</>;
};
