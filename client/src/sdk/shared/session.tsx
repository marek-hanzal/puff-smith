import {createGet} from "@leight-core/leight";
import {UserDto} from "@/sdk/shared/user"

export interface SessionDto {
	user: UserDto;
}

export const doTicketFetch = createGet<SessionDto>("session.ticket");