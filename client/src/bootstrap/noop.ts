// @ts-ignore
if (process.env === "production") {
	const noop = () => null;
	[
		"assert", "clear", "count", "debug", "dir", "dirxml", "error",
		"exception", "group", "groupCollapsed", "groupEnd", "info", "log",
		"markTimeline", "profile", "profileEnd", "table", "time", "timeEnd",
		"timeline", "timelineEnd", "timeStamp", "trace", "warn",
		// @ts-ignore
	].forEach((method) => (window.console[method] = noop));
}
