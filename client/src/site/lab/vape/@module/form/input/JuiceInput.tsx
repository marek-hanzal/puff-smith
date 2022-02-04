import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IJuiceInputProps extends Partial<RadioGroupProps> {
}

export const JuiceInput: FC<IJuiceInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={0}>{t('lab.vape.juice.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.vape.juice.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.vape.juice.2')}</Radio.Button>
	</Radio.Group>;
}
