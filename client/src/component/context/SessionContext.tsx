import {SessionDto} from "@/sdk/shared/session";
import {useSessionContext as useCoolSessionContext} from "@leight-core/leight";

export const useSessionContext = () => useCoolSessionContext<SessionDto>();
