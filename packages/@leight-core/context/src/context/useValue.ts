import {DependencyList} from "react";
import {useMemo}        from "use-memo-one";

export const useValue = <T>(callback: () => T, deps: DependencyList | undefined): T => {
    return useMemo(callback, deps);
};
