import {IPgVgRatio} from "@/puff-smith/service/liquid";
import {Alert, Divider} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidRatioHintProps {
	pgvg?: IPgVgRatio;
}

export const LiquidRatioHint: FC<ILiquidRatioHintProps> = ({pgvg}) => {
	const {t} = useTranslation();
	if (!pgvg) {
		return null;
	}

	const message = t("lab.liquid.hint.vg." + (Math.round(pgvg.ratio.vg * 0.1) / 0.1));
	return message ? <>
		<Alert
			type={"success"}
			message={message}
		/>
		<Divider/>
	</> : null;
};
