export interface DateTime {

}

export module DateTime {
	export const ATOM = "Y-m-d\\TH:i:sP";
	export const COOKIE = "l, d-M-Y H:i:s T";
	export const ISO8601 = "Y-m-d\\TH:i:sO";
	export const RFC822 = "D, d M y H:i:s O";
	export const RFC850 = "l, d-M-y H:i:s T";
	export const RFC1036 = "D, d M y H:i:s O";
	export const RFC1123 = "D, d M Y H:i:s O";
	export const RFC7231 = "D, d M Y H:i:s \\G\\M\\T";
	export const RFC2822 = "D, d M Y H:i:s O";
	export const RFC3339 = "Y-m-d\\TH:i:sP";
	export const RFC3339_EXTENDED = "Y-m-d\\TH:i:s.vP";
	export const RSS = "D, d M Y H:i:s O";
	export const W3C = "Y-m-d\\TH:i:sP";
}
