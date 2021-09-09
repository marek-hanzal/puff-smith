import {SessionDto} from "@/ps/sdk/session";
import {useSessionContext as useCoolSessionContext} from "@leight-core/leight";

export const useSessionContext = () => useCoolSessionContext<SessionDto>();
