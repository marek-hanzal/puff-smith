import {FC} from "react";
import {toHumanNumber} from "@leight-core/client";
import {useTranslation} from "react-i18next";

export interface IPriceProps {
	price?: number | null;
	defaultText?: string;
}

export const Price: FC<IPriceProps> = ({price, defaultText = '-'}) => {
	const {t} = useTranslation();
	return <>{price !== undefined ? toHumanNumber(price, 4) : t(defaultText)}</>;
}
