import {Select, SelectProps} from "antd";
import {FC} from "react";

export interface ILogTypeSelectProps extends Partial<SelectProps<any>> {
}

export const LogTypeSelect: FC<ILogTypeSelectProps> = props => {
	return <Select
		mode={"multiple"}
		options={[
			{label: "info", value: "info"},
			{label: "warning", value: "warning"},
			{label: "error", value: "error"},
			{label: "debug", value: "debug"},
		]}
		{...props}
	/>;
};
