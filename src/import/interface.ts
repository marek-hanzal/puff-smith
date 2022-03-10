export interface IImportTabs {
	tab: string;
	services: string[];
}

export interface IImportTranslations {
	[index: string]: string;
}

export interface IImportMeta {
	tabs: IImportTabs[];
	translations: IImportTranslations;
}

export interface IImportBeginEvent {
	count: number;
}

export interface IImportEndEvent {
	count: number;
	success?: number;
	successRatio?: number;
	failure?: number;
	failureRatio?: number;
	runtime: number;
}

export interface IImportHandler<TItem> {
	begin?(event: IImportBeginEvent): Promise<void>;

	end?(event: IImportEndEvent): Promise<void>;

	handler(item: TItem): Promise<void>;
}

export interface IImportHandlers {
	[index: string]: () => IImportHandler<any>;
}
