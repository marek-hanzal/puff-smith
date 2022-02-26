import {BellOutlined} from "@ant-design/icons";
import {Badge, Button, ButtonProps, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useNotificationContext} from "@/puff-smith";

export interface INotificationButtonProps extends Partial<ButtonProps> {
}

export const NotificationButton: FC<INotificationButtonProps> = props => {
	const {t} = useTranslation();
	const notificationContext = useNotificationContext();
	return (
		<Tooltip trigger={notificationContext.hasNotifications() ? "hover" : "contextMenu"} title={t("lab.notifications.tooltip")}>
			<Badge
				count={notificationContext.count}
			>
				<Button
					type={"link"}
					disabled={!notificationContext.hasNotifications()}
					icon={<BellOutlined/>}
					{...props}
				/>
			</Badge>
		</Tooltip>
	);
};
