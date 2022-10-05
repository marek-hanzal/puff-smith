import {IBackupRequest, IBackupService} from "@/puff-smith/service/backup/interface";
import {Container, ContainerClass} from "@/puff-smith/service/Container";
import dayjs from "dayjs";

export const BackupService = () => new BackupServiceClass(Container());

export class BackupServiceClass implements IBackupService {
	readonly container: ContainerClass;

	constructor(container: ContainerClass) {
		this.container = container;
	}

	async backup(backup: IBackupRequest): Promise<void> {
		return this.container.useFileSource(async fileSource => {
			const file = fileSource.store({
				path: "/backup",
				name: `Backup-${dayjs().format("YYYY-MM-DD")}.zip`,
				replace: true,
			});
		});
	}
}
