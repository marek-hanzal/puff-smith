import {UserPreview} from "../../index";
import {UserDto} from "@/sdk/edde/bridge/user";
import {EyeOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserPreviewButtonProps extends Partial<IDrawerButtonProps> {
	user: UserDto;
}

export const UserPreviewButton: FC<IUserPreviewButtonProps> = ({user, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		label={<Tooltip title={t("root.user.preview.tooltip")}>
			{user.name}
		</Tooltip>}
		width={550}
		type={"link"}
		icon={<EyeOutlined/>}
		{...props}
	>
		<UserPreview user={user}/>
	</DrawerButton>;
};
