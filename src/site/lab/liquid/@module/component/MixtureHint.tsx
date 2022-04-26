import {IMixture} from "@/puff-smith/service/mixture/interface";
import {Alert} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureHintProps {
	result?: IMixture;
}

export const MixtureHint: FC<IMixtureHintProps> = ({result}) => {
	const {t} = useTranslation();
	if (!result) {
		return null;
	}

	if (result.error) {
		return <Alert
			type={"error"}
			message={t("lab.liquid.hint." + result.error)}
		/>;
	}

	const message = t("lab.liquid.hint.vg." + result.vgToRound, "");
	return message ? <Alert
		type={"success"}
		message={message}
	/> : null;
};
