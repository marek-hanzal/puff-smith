import {FC} from "react";
import {INamesSourceSelectProps, NamesSourceSelect} from "@/sdk/edde/api/root/profiler/endpoint";

export interface IProfilerNamesSelectProps extends Partial<INamesSourceSelectProps> {
}

export const ProfilerNamesSelect: FC<IProfilerNamesSelectProps> = props => {
	return <NamesSourceSelect
		mode={"multiple"}
		allowClear
		toOption={item => ({label: item.name, value: item.id})}
		{...props}
	/>;
};
