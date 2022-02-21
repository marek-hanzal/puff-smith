import {FC} from "react";

export interface IDateTimeFormatSelectProps extends Partial<IDateTimeFormatListSourceSelectProps> {
}

export const DateTimeFormatSelect: FC<IDateTimeFormatSelectProps> = props => {
	return <DateTimeFormatListSourceSelect
		toOption={item => ({label: item.code, value: item.id})}
		showSearch={false}
		{...props}
	/>;
};
