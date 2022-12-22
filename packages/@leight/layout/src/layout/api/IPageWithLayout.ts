import {
    FC,
    ReactNode
} from "react";

export interface IPageWithLayout extends FC {
    layout(page: ReactNode): ReactNode;
}
