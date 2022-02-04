import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IThroathitInputProps extends Partial<RadioGroupProps> {
}

export const ThroathitInput: FC<IThroathitInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={0}>{t('lab.vape.throathit.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.vape.throathit.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.vape.throathit.2')}</Radio.Button>
		<Radio.Button value={3}>{t('lab.vape.throathit.3')}</Radio.Button>
		<Radio.Button value={4}>{t('lab.vape.throathit.4')}</Radio.Button>
	</Radio.Group>;
}
