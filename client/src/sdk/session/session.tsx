import {UserDto} from "@/ps/sdk/user";
import {createGet} from "@leight-core/leight";

export interface SessionDto {
	user: UserDto;
}

export const doTicketFetch = createGet<SessionDto>("session.ticket");
