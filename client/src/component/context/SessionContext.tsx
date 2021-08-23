import {ps} from "@/ps/sdk";
import {useSessionContext as useCoolSessionContext} from "@leight-core/leight";

export const useSessionContext = () => useCoolSessionContext<ps.session.SessionDto>();
