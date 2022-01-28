export interface PatchDto {
	id: string;
	name?: string | null | undefined;
	code?: string | null | undefined;
	active: boolean | null;
	steep?: number | null | undefined;
	pg?: number | null | undefined;
	vg?: number | null | undefined;
	nicotine?: number | null | undefined;
	volume?: number | null | undefined;
	mixed?: string | null | undefined;
	expires?: string | null | undefined;
	liquidId?: string | null | undefined;
	boosterId?: string | null | undefined;
	baseId?: string | null | undefined;
}

export module PatchDto {

}
