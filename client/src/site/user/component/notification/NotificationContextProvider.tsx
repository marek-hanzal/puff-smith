import {NotificationContext, NotificationContextClass} from "@/ps/site/user";
import {FC, useState} from "react";

export interface INotificationContextProviderProps {
}

export const NotificationContextProvider: FC<INotificationContextProviderProps> = ({children}) => {
	const count = useState<number>(0);
	return <NotificationContext.Provider
		value={new NotificationContextClass(
			count,
		)}
	>
		{children}
	</NotificationContext.Provider>;
};
