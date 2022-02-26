import {LogFilterDto} from "@/sdk/edde/log/dto";
import {Filter, FormItem, IFilterWithoutTranslationProps} from "@leight-core/common";
import {FC} from "react";
import {LogTypeSelect} from "@/puff-smith/site/root/log";

export interface ILogFilterProps extends Partial<IFilterWithoutTranslationProps<LogFilterDto>> {

}

export const LogFilter: FC<ILogFilterProps> = props => {
	return <Filter<LogFilterDto>
		translation={"root.log"}
		{...props}
	>
		<FormItem field={'types'}>
			<LogTypeSelect/>
		</FormItem>
	</Filter>
}
