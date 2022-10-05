import {IBackupRequest, IBackupService} from "@/puff-smith/service/backup/interface";
import {ContainerClass} from "@/puff-smith/service/Container";
import {IJobProgress, ISource, IUser} from "@leight-core/api";
import dayjs from "dayjs";
import fs from "node:fs";
import {Logger} from "winston";
// @ts-ignore
import zipper from "zip-local";

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
	readonly logger: Logger;
	readonly jobProgress: IJobProgress;

	constructor({container, user, logger, jobProgress}: IBackupServiceDeps) {
		this.container = container;
		this.user = user;
		this.logger = logger;
		this.jobProgress = jobProgress;
	}

	async backup(backup: IBackupRequest): Promise<void> {
		return this.container.useFileSource(async fileSource => {
			const stamp = dayjs().format("YYYY-MM-DD");
			fileSource.withUser(this.user);
			const file = await fileSource.store({
				path: "/backup",
				name: `Backup-${stamp}.zip`,
				replace: true,
			});
			const backup = `.data/backup/${stamp}`;
			fs.mkdirSync(backup, {recursive: true});

			await this.container.useAromaSource(async source => this.export(backup, source));
			await this.container.useBaseSource(async source => this.export(backup, source));
			await this.container.useBoosterSource(async source => this.export(backup, source));
			await this.container.useLiquidSource(async source => this.export(backup, source));
			await this.container.useRecipeSource(async source => this.export(backup, source));
			await this.container.useTagSource(async source => this.export(backup, source));
			await this.container.useTokenSource(async source => this.export(backup, source));
			await this.container.useTranslationSource(async source => this.export(backup, source));
			await this.container.useUserSource(async source => this.export(backup, source));
			await this.container.useVendorSource(async source => this.export(backup, source));

			zipper.sync.zip(backup).compress().save(file.location);
			fs.rmSync(backup, {recursive: true, force: true});
			const $file = await fileSource.refresh(file.id);
			this.logger.debug(`Finished backup of ${file.location} ${$file.mime}.`);
		});
	}

	async export(backup: string, source: ISource<any, any, any>) {
		const path = `${backup}/source/${source.name}`;
		fs.mkdirSync(path, {recursive: true});
		const size = 250;
		const total = await source.count({});
		const pages = Math.ceil(total / size);
		for (let page = 0; page <= pages; page++) {
			for (let entity of await source.list(source.query({page, size}))) {
				fs.writeFileSync(`${path}/${entity.id}.json`, JSON.stringify(entity));
			}
		}
	}
}
