import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface ICoilOffsetInputProps extends Partial<RadioGroupProps> {
}

export const CoilOffsetInput: FC<ICoilOffsetInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={-2}>{t('lab.build.coilOffset.-2')}</Radio.Button>
		<Radio.Button value={-1}>{t('lab.build.coilOffset.-1')}</Radio.Button>
		<Radio.Button value={0}>{t('lab.build.coilOffset.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.build.coilOffset.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.build.coilOffset.2')}</Radio.Button>
	</Radio.Group>;
}
