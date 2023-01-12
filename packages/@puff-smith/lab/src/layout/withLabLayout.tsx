import {type IPageWithLayout} from "@leight/layout";
import {type FC}              from "react";
import {
    ILabLayoutProps,
    LabLayout
}                             from "./LabLayout";

export function withLabLayout(Component: FC<any>, props: ILabLayoutProps) {
    (Component as unknown as IPageWithLayout).layout = children => {
        return <LabLayout {...props}>
            {children}
        </LabLayout>;
    };
    return Component;
}
