import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IGlowOffsetInputProps extends Partial<RadioGroupProps> {
}

export const GlowOffsetInput: FC<IGlowOffsetInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={1}>{t('lab.build.glow.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.build.glow.2')}</Radio.Button>
		<Radio.Button value={3}>{t('lab.build.glow.3')}</Radio.Button>
		<Radio.Button value={4}>{t('lab.build.glow.4')}</Radio.Button>
		<Radio.Button value={5}>{t('lab.build.glow.5')}</Radio.Button>
	</Radio.Group>;
}
