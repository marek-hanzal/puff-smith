export interface IMigration {
	name(): string;

	run(): Promise<void>;

	isEnabled(): boolean;
}

export interface IMigrationService {
	migrate(migrations: IMigration[]): void;
}
