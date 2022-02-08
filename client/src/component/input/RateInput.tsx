import {FC, forwardRef} from "react";
import {Button, Radio, RadioGroupProps, Space} from "antd";
import {useTranslation} from "react-i18next";
import {useOptionalFormItemContext} from "@leight-core/leight";

export interface IRateInputProps extends Partial<RadioGroupProps> {
	translation: string;
	min?: number;
	max?: number;
	allowClear?: boolean
	ref?: any;
}

export const RateInput: FC<IRateInputProps> = forwardRef(({translation, min = 1, max = 5, allowClear = false, ...props}, ref) => {
	const formItem = useOptionalFormItemContext();
	const {t} = useTranslation();

	const buttons = [];
	for (let i = min; i <= max; i++) {
		buttons.push(<Radio.Button key={i} value={i}>{t(translation + '.' + i)}</Radio.Button>);
	}

	return <Space direction={'vertical'}>
		<Radio.Group ref={ref as any} optionType={'button'} buttonStyle={'solid'} {...props}>
			{buttons}
		</Radio.Group>
		{formItem && allowClear && <Button
			type={'link'}
			size={'small'}
			onClick={() => formItem?.setValue(undefined)}
		>{t('common.clear.label')}</Button>}
	</Space>
});
