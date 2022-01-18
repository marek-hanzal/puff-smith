import {useSessionContext} from "@leight-core/leight";
import {SessionDto} from "@/sdk/edde/session/dto";

/**
 * Common marsh session is used to get an information about current user session (regardless of used
 * site).
 */
export const usePuffSmithSessionContext = () => useSessionContext<SessionDto>();
