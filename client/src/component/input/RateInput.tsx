import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IRateInputProps extends Partial<RadioGroupProps> {
	translation: string;
}

export const RateInput: FC<IRateInputProps> = ({translation, ...props}) => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={1}>{t(translation + '.rate.1')}</Radio.Button>
		<Radio.Button value={2}>{t(translation + '.rate.2')}</Radio.Button>
		<Radio.Button value={3}>{t(translation + '.rate.3')}</Radio.Button>
		<Radio.Button value={4}>{t(translation + '.rate.4')}</Radio.Button>
		<Radio.Button value={4}>{t(translation + '.rate.5')}</Radio.Button>
	</Radio.Group>;
}
