import {PurchaseIcon} from "@/puff-smith/component/icon";
import {toHumanNumber} from "@leight-core/client";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IPriceProps {
	price?: number | null;
	defaultText?: string;
	withIcon?: boolean;
	withColor?: boolean;
}

export const Price: FC<IPriceProps> = ({price, withIcon = false, withColor = false, defaultText = "-"}) => {
	const {t} = useTranslation();
	return <>{price !== undefined ? <Space align={"center"} size={4}>
		{withIcon ? <Typography.Text type={"secondary"}><PurchaseIcon/></Typography.Text> : undefined}
		{withColor ? <Typography.Text type={((price || 0) >= 0 ? "success" : "danger")}>{toHumanNumber(price, 5)}</Typography.Text> : toHumanNumber(price, 5)}
	</Space> : t(defaultText)}</>;
};
