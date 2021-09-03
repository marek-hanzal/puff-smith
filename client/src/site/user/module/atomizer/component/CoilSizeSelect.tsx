import {Select, SelectProps} from "antd";
import {FC} from "react";

export interface ICoilSizeSelectProps extends Partial<SelectProps<any>> {
}

export const CoilSizeSelect: FC<ICoilSizeSelectProps> = props => {
	return <Select
		options={[
			{value: 10, label: 10},
			{value: 15, label: 15},
			{value: 20, label: 20},
			{value: 25, label: 25},
			{value: 30, label: 30},
			{value: 35, label: 35},
			{value: 40, label: 40},
			{value: 45, label: 45},
		]}
		{...props}
	/>;
};