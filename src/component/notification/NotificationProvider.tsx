import {FC, useState} from "react";
import {NotificationContext} from "./NotificationContext";

export interface INotificationProviderProps {
}

export const NotificationProvider: FC<INotificationProviderProps> = props => {
	const [count, setCount] = useState<number>(0);
	return <NotificationContext.Provider
		value={{
			count,
			setCount,
			hasNotifications: () => count > 0,
		}}
		{...props}
	/>;
};
