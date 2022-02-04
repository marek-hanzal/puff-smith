import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface ICoilCountInputProps extends Partial<RadioGroupProps> {
}

export const CoilCountInput: FC<ICoilCountInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={1}>{t('lab.build.coilCount.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.build.coilCount.2')}</Radio.Button>
		<Radio.Button value={3}>{t('lab.build.coilCount.3')}</Radio.Button>
		<Radio.Button value={4}>{t('lab.build.coilCount.4')}</Radio.Button>
	</Radio.Group>;
}
