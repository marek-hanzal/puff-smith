export interface UpgradeOrderByDto {
	name?: boolean | undefined;
	version?: boolean | undefined;
	active?: boolean | undefined;
}

export module UpgradeOrderByDto {

}


export interface UpgradeFilterDto {
	active?: boolean | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module UpgradeFilterDto {

}


export interface UpgradeDto {
	version: string;
	name: string;
	active: boolean;
}

export module UpgradeDto {

}
