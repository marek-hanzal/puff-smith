import {useNotificationContext} from "@/puff-smith/component/notification/NotificationContext";
import {NotificationIcon}       from "@leight-core/viv";
import {
    Badge,
    Button,
    ButtonProps,
    Tooltip
}                               from "antd";
import {FC}                     from "react";
import {useTranslation}         from "react-i18next";

export interface INotificationButtonProps extends Partial<ButtonProps> {
}

export const NotificationButton: FC<INotificationButtonProps> = props => {
	const {t}                 = useTranslation();
	const notificationContext = useNotificationContext();
	return (
		<Tooltip trigger={notificationContext.hasNotifications() ? "hover" : "contextMenu"} title={t("inventory.notifications.tooltip")}>
			<Badge
				count={notificationContext.count}
			>
				<Button
					type={"link"}
					disabled={!notificationContext.hasNotifications()}
					icon={<NotificationIcon/>}
					{...props}
				/>
			</Badge>
		</Tooltip>
	);
};
