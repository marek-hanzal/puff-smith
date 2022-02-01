export interface CreateDto {
	code: string | null;
	steep: number | null;
	rating: number | null;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
	mixed: string;
	expires: string | null;
	liquidId: string;
	boosterId: string | null;
	baseId: string | null;
}

export module CreateDto {

}
