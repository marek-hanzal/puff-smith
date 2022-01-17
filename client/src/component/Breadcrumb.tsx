import {BreadcrumbPortal} from "@leight-core/leight";
import {Breadcrumb as CoolBreadcrumb, BreadcrumbProps} from "antd";
import {FC} from "react";

export interface IBreadcrumbProps extends Partial<BreadcrumbProps> {
}

export const Breadcrumb: FC<IBreadcrumbProps> = props => {
	return <BreadcrumbPortal>
		<CoolBreadcrumb {...props}/>
	</BreadcrumbPortal>;
};
