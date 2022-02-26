import {FC} from "react";

export interface IDateFormatSelectProps extends Partial<IDateFormatListSourceSelectProps> {
}

export const DateFormatSelect: FC<IDateFormatSelectProps> = props => {
	return <DateFormatListSourceSelect
		toOption={item => ({label: item.code, value: item.id})}
		showSearch={false}
		{...props}
	/>;
};
