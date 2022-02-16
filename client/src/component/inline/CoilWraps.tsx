import {Space, Tooltip} from "antd";
import {ReloadOutlined} from "@ant-design/icons";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilWrapsProps {
	wraps: number;
}

export const CoilWraps: FC<ICoilWrapsProps> = ({wraps}) => {
	const {t} = useTranslation();
	return <Tooltip title={t('lab.coil.preview.wraps')}>
		<Space size={1}>
			<span>{wraps}</span><ReloadOutlined/>
		</Space>
	</Tooltip>
}
