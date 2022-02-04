import {FC} from "react";
import {Radio, RadioGroupProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IAirflowInputProps extends Partial<RadioGroupProps> {
}

export const AirflowInput: FC<IAirflowInputProps> = props => {
	const {t} = useTranslation();
	return <Radio.Group optionType={'button'} buttonStyle={'solid'} {...props}>
		<Radio.Button value={0}>{t('lab.vape.airflow.0')}</Radio.Button>
		<Radio.Button value={1}>{t('lab.vape.airflow.1')}</Radio.Button>
		<Radio.Button value={2}>{t('lab.vape.airflow.2')}</Radio.Button>
		<Radio.Button value={3}>{t('lab.vape.airflow.3')}</Radio.Button>
	</Radio.Group>;
}
