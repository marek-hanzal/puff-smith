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
