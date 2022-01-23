export interface CreateDto {
	name: string;
	code: string;
	steep: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
	mixed: number;
	expires: number | null;
	liquidId: string;
	boosterId: string | null;
	baseId: string | null;
}

export module CreateDto {

}
