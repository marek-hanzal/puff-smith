import {Space, Tooltip, Typography} from "antd";
import {ArrowsAltOutlined} from "@ant-design/icons";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilSizeProps {
	size: number;
	noTooltip?: boolean;
}

export const CoilSize: FC<ICoilSizeProps> = ({noTooltip = false, size}) => {
	const {t} = useTranslation();
	return <Tooltip title={noTooltip ? undefined : t('lab.coil.preview.size')}>
		<Space size={1}>
			<ArrowsAltOutlined/>
			<Typography.Text>{size}</Typography.Text>
		</Space>
	</Tooltip>
}
