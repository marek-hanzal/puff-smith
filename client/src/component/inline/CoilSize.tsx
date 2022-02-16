import {Space, Tooltip} from "antd";
import {ArrowsAltOutlined} from "@ant-design/icons";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilSizeProps {
	size: number;
}

export const CoilSize: FC<ICoilSizeProps> = ({size}) => {
	const {t} = useTranslation();
	return <Tooltip title={t('lab.coil.preview.size')}>
		<Space size={1}>
			<span>{size}</span><ArrowsAltOutlined/>
		</Space>
	</Tooltip>
}
