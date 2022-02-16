import {FC} from "react";
import {Radio, RadioProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IDualModeInputProps extends Partial<RadioProps> {
}

export const DualModeInput: FC<IDualModeInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} {...props}>
		<Radio.Button value={1}>{t('lab.dual-coil.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.dual-coil.2')}</Radio.Button>
	</Radio.Group>
}
