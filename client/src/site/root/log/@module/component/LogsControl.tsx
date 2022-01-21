import {LogsTable} from "@/puff-smith/site/root/log";
import {FC} from "react";

export interface ILogsControlProps {
}

/**
 * This is component build around LogsTable to control it (thus providing some extra functions which
 * could be reused 'round the app.
 */
export const LogsControl: FC<ILogsControlProps> = () => {
	return <LogsTable/>;
};
