import {INotificationContext} from "@/ps/site/user";
import {useContext} from "@leight-core/leight";
import {createContext} from "react";

export const NotificationContext = createContext(null as unknown as INotificationContext);

/**
 * App-wise (user) notification support.
 */
export const useNotificationContext = () => useContext<INotificationContext>(NotificationContext, "NotificationContext");
