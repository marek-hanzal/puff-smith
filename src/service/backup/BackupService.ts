import {IBackupRequest, IBackupService} from "@/puff-smith/service/backup/interface";
import {ContainerClass} from "@/puff-smith/service/Container";
import {IJobProgress, IUser} from "@leight-core/api";
import dayjs from "dayjs";
import {Logger} from "winston";

export interface IBackupServiceDeps {
	user: IUser;
	container: ContainerClass;
	jobProgress: IJobProgress;
	logger: Logger;
}

export const BackupService = (deps: IBackupServiceDeps) => new BackupServiceClass(deps);

export class BackupServiceClass implements IBackupService {
	readonly container: ContainerClass;
	readonly user: IUser;

	constructor({container, user}: IBackupServiceDeps) {
		this.container = container;
		this.user = user;
	}

	async backup(backup: IBackupRequest): Promise<void> {
		return this.container.useFileSource(async fileSource => {
			fileSource.withUser(this.user);
			const file = fileSource.store({
				path: "/backup",
				name: `Backup-${dayjs().format("YYYY-MM-DD")}.zip`,
				replace: true,
			});
			console.log("Yahoo0!");
		});
	}
}
