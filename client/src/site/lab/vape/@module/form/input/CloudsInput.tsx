import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface ICloudsInputProps extends Partial<RadioGroupProps> {
}

export const CloudsInput: FC<ICloudsInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={0}>{t('lab.vape.clouds.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.vape.clouds.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.vape.clouds.2')}</Radio.Button>
		<Radio.Button value={3}>{t('lab.vape.clouds.3')}</Radio.Button>
	</Radio.Group>;
}
