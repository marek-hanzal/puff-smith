import {toHumanNumber} from "@leight-core/utils";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IPgVgInlineProps {
	vgpg?: { pg: number; vg: number };
}

export const VgPgInline: FC<IPgVgInlineProps> = ({vgpg}) => {
	const {t} = useTranslation();
	return vgpg ? <Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
		<Typography.Text type={"success"}>
			{toHumanNumber(vgpg.vg, "-", 3)}%
		</Typography.Text>
		<Typography.Text type={"warning"}>
			{toHumanNumber(vgpg.pg, "-", 3)}%
		</Typography.Text>
	</Space> : <>-</>;
};
