import {createContext} from "react";
import {INotificationContext} from "./interface";
import {useContext} from "@leight-core/client";

export const NotificationContext = createContext(null as unknown as INotificationContext);

/**
 * App-wise (user) notification support.
 */
export const useNotificationContext = () => useContext<INotificationContext>(NotificationContext, "NotificationContext");
