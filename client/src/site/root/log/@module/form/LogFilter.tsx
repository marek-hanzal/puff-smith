import {LogFilterDto} from "@/sdk/edde/log/dto";
import {Filter, IFilterWithoutTranslationProps} from "@leight-core/leight";
import {FC} from "react";
import {FormItem} from "@leight-core/leight/dist";
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
