import {useNotificationContext} from "@/ps/site/user";
import {BellOutlined} from "@ant-design/icons";
import {Badge, Button, ButtonProps, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface INotificationButtonProps extends Partial<ButtonProps> {
}

export const NotificationButton: FC<INotificationButtonProps> = () => {
	const {t} = useTranslation();
	const notificationContext = useNotificationContext();
	return <Tooltip trigger={notificationContext.hasNotifications() ? "hover" : "contextMenu"} title={t("user.notifications.tooltip")}>
		<Badge
			count={notificationContext.count()}
		>
			<Button
				type={"link"}
				disabled={!notificationContext.hasNotifications()}
				icon={<BellOutlined/>}
			/>
		</Badge>
	</Tooltip>;
};
