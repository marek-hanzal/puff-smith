import {INotificationContext} from "@/ps/site/user";

export class NotificationContextClass implements INotificationContext {
	_count: [number, (value: number) => void];

	constructor(count: [number, ((value: number) => void)]) {
		this._count = count;
	}

	count(): number {
		return this._count[0];
	}

	setCount(count: number): void {
		this._count[1](count);
	}

	hasNotifications(): boolean {
		return this.count() > 0;
	}
}
