import {FC} from "react";
import {toHumanNumber} from "@leight-core/client";
import {useTranslation} from "react-i18next";
import {PurchaseIcon} from "@/puff-smith/component/icon";
import {Space, Typography} from "antd";

export interface IPriceProps {
	price?: number | null;
	defaultText?: string;
	withIcon?: boolean;
	withColor?: boolean;
}

export const Price: FC<IPriceProps> = ({price, withIcon = false, withColor = false, defaultText = '-'}) => {
	const {t} = useTranslation();
	return <>{price !== undefined ? <Space>
		{withIcon ? <Typography.Text type={'secondary'}><PurchaseIcon/></Typography.Text> : undefined}
		{withColor ? <Typography.Text type={((price || 0) >= 0 ? 'success' : 'danger')}>{toHumanNumber(price, 4)}</Typography.Text> : toHumanNumber(price, 4)}
	</Space> : t(defaultText)}</>;
}
