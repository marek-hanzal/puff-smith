import {Space, Tooltip, Typography} from "antd";
import {ReloadOutlined} from "@ant-design/icons";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilWrapsProps {
	wraps: number;
	noTooltip?: boolean;
}

export const CoilWraps: FC<ICoilWrapsProps> = ({noTooltip = false, wraps}) => {
	const {t} = useTranslation();
	return <Tooltip title={noTooltip ? undefined : t('common.coil.wraps.tooltip')}>
		<Space size={1}>
			<ReloadOutlined/>
			<Typography.Text>{wraps}</Typography.Text>
		</Space>
	</Tooltip>
}
