import {AromaService} from "@/puff-smith/service/aroma/AromaService";
import {IAroma, IAromaQuery} from "@/puff-smith/service/aroma/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aromas", IAromaQuery, IAroma>(async ({request: {filter: {ownedByUserId, notOwnedByUserId, ownedByCurrentUser, notOwnedByCurrentUser, ...filter} = {}, ...request}, toUserId}) => AromaService().handleQuery({
	request: {
		...request,
		filter: {
			...filter,
			ownedByUserId: ownedByCurrentUser ? toUserId() : ownedByUserId,
			notOwnedByUserId: notOwnedByCurrentUser ? toUserId() : notOwnedByUserId,
		},
	}
}));
