import {ConfigPreview} from "@/puff-smith/site/root/settings/config";
import {ConfigDto} from "@/sdk/edde/config/dto";
import {EyeOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IConfigPreviewButtonProps extends Partial<IDrawerButtonProps> {
	config: ConfigDto;
}

export const ConfigPreviewButton: FC<IConfigPreviewButtonProps> = ({config, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		label={<Tooltip title={t("root.config.preview.tooltip")}>
			{config.key}
		</Tooltip>}
		width={550}
		type={"link"}
		icon={<EyeOutlined/>}
		{...props}
	>
		<ConfigPreview config={config}/>
	</DrawerButton>;
};
