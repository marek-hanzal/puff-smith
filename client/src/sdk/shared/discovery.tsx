import {createGet, IDiscoveryIndex,} from "@leight-core/leight";

export interface IndexResponse {
	index: IDiscoveryIndex;
}

export const doIndexFetch = createGet<IndexResponse>("discovery.index");
