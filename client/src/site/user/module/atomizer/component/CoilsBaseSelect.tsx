import {Select, SelectProps} from "antd";
import {FC} from "react";

export interface ICoilsBaseSelectProps extends Partial<SelectProps<any>> {
}

export const CoilsBaseSelect: FC<ICoilsBaseSelectProps> = props => {
	return <Select
		options={[
			{value: 1, label: 1},
			{value: 2, label: 2},
			{value: 3, label: 3},
			{value: 4, label: 4},
		]}
		{...props}
	/>;
};
