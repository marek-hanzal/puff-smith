import {vapersdream} from "@/vapers-dream/sdk";
import {useSessionContext as useCoolSessionContext} from "@leight-core/leight";

export const useSessionContext = () => useCoolSessionContext<vapersdream.session.SessionDto>();
