export interface IOhmService {
	toOhm(voltage: number, current: number): number;

	toAmps(voltage: number, ohm: number): number;

	toWatt(voltage: number, amps: number): number;
}
