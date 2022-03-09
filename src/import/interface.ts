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

export interface IImportHandler<TItem> {
	begin?(): Promise<void>;

	end?(): Promise<void>;

	handler(item: TItem): Promise<void>;
}

export interface IImportHandlers {
	[index: string]: () => IImportHandler<any>;
}
