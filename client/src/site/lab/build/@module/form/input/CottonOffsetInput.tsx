import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface ICottonOffsetInputProps extends Partial<RadioGroupProps> {
}

export const CottonOffsetInput: FC<ICottonOffsetInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={-2}>{t('lab.build.cottonOffset.-2')}</Radio.Button>
		<Radio.Button value={-1}>{t('lab.build.cottonOffset.-1')}</Radio.Button>
		<Radio.Button value={0}>{t('lab.build.cottonOffset.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.build.cottonOffset.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.build.cottonOffset.2')}</Radio.Button>
	</Radio.Group>;
}
