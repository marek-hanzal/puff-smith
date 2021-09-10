import {createGet} from "@leight-core/leight";

export interface IndexResponse {
	index: { [index in string]: DiscoveryItem };
}

export interface DiscoveryItem {
	id: string;
	link: string;
	url: string;
}

export const doIndexFetch = createGet<IndexResponse>("discovery.index");