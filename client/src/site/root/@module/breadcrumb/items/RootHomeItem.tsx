import {HomeIcon, LinkTo} from "@leight-core/leight";
import {Breadcrumb, BreadcrumbItemProps, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IRootHomeItemProps extends Partial<BreadcrumbItemProps> {
}

export const RootHomeItem: FC<IRootHomeItemProps> = props => {
	const {t} = useTranslation();
	return <Breadcrumb.Item {...props}>
		<Tooltip title={t("root.home.breadcrumb.tooltip")}>
			<LinkTo href={"/root"}>
				<HomeIcon/>
			</LinkTo>
		</Tooltip>
	</Breadcrumb.Item>;
};
