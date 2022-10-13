import {toHumanNumber} from "@leight-core/viv";
import {
	Space,
	Typography
}                      from "antd";
import {FC}            from "react";

export interface IPgVgInlineProps {
	vgpg?: { pg: number; vg: number } | null;
}

export const VgPgInline: FC<IPgVgInlineProps> = ({vgpg}) => {
	return vgpg ? <Space size={4} split={<Typography.Text type={"secondary"}>/</Typography.Text>}>
		<Typography.Text type={"success"}>
			{toHumanNumber(vgpg.vg, "-", 3)}%
		</Typography.Text>
		<Typography.Text type={"warning"}>
			{toHumanNumber(vgpg.pg, "-", 3)}%
		</Typography.Text>
	</Space> : <>-</>;
};
