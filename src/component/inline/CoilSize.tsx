import {ArrowsAltOutlined} from "@ant-design/icons";
import {
	Space,
	Tooltip,
	Typography
}                          from "antd";
import {FC}                from "react";
import {useTranslation}    from "react-i18next";

export interface ICoilSizeProps {
	size: number;
	noTooltip?: boolean;
}

export const CoilSize: FC<ICoilSizeProps> = ({noTooltip = false, size}) => {
	const {t} = useTranslation();
	return <Tooltip title={noTooltip ? undefined : t("common.coil.size.tooltip")}>
		<Space size={1}>
			<Typography.Text type={"secondary"}><ArrowsAltOutlined/></Typography.Text>
			<Typography.Text>{size}</Typography.Text>
		</Space>
	</Tooltip>;
};
