import {IMixtureResult} from "@/puff-smith/service/liquid";
import {Alert, Divider} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMixtureHintProps {
	result?: IMixtureResult;
}

export const MixtureHint: FC<IMixtureHintProps> = ({result}) => {
	const {t} = useTranslation();
	if (!result) {
		return null;
	}

	if (result.error) {
		return <>
			<Alert
				type={"error"}
				message={t("lab.liquid.hint." + result.error)}
			/>
			<Divider/>
		</>;
	}

	const message = t("lab.liquid.hint.vg." + (Math.round(result.ratio.vg * 0.1) / 0.1));
	return message ? <>
		<Alert
			type={"success"}
			message={message}
		/>
		<Divider/>
	</> : null;
};
