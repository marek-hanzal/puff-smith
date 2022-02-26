export interface INotificationContext {
	/**
	 * Number of current notifications.
	 */
	readonly count: number;

	/**
	 * Set current number of notifications.
	 *
	 * @param count
	 */
	setCount(count: number): void;

	hasNotifications(): boolean;
}
