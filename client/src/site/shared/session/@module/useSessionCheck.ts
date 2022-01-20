import {useTicketQuery} from "@/sdk/edde/api/shared/user/endpoint";
import {SessionDto} from "@/sdk/edde/session/dto";
import {useNavigate} from "@leight-core/leight";
import {useEffect} from "react";
import {UseQueryResult} from "react-query";

export function useSessionCheck(): UseQueryResult<SessionDto | undefined> {
	const navigate = useNavigate();
	const result = useTicketQuery(undefined, undefined, {
		refetchInterval: 30 * 1000,
	});
	useEffect(() => {
		!result.isFetching && !result.data?.user?.id && (() => {
			navigate("/sign-out");
		})();
	}, [result]);
	return result;
}
