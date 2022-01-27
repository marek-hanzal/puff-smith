import {FC} from "react";
import {DatePicker, DatePickerProps} from "antd";

export type IPickDateProps = {
	format?: string
}

export const PickDate: FC<DatePickerProps & IPickDateProps> = ({format = 'LLL', ...props}) => {
	return <DatePicker
		format={date => date.format('LLL')}
		size={'large'}
		style={{width: '100%'}}
		{...props}
	/>
}
