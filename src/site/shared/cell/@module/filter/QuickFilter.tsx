import {IInlineFilterProps, InlineFilter} from "@/puff-smith/component/filter/InlineFilter";
import {ICellQuery} from "@/puff-smith/service/cell/interface";
import {FC} from "react";

export interface IQuickFilterProps extends Partial<IInlineFilterProps<ICellQuery>> {
}

export const QuickFilter: FC<IQuickFilterProps> = props => {
	return <InlineFilter<ICellQuery>
		translation={"market.filter.cell"}
		filters={[
			{
				name: "type",
				reset: {type: undefined},
				options: [
					{
						name: "18350",
						filter: {type: {code: "18350"}},
					},
					{
						name: "18650",
						filter: {type: {code: "18650"}},
					},
					{
						name: "20700",
						filter: {type: {code: "20700"}},
					},
					{
						name: "21700",
						filter: {type: {code: "21700"}},
					},
				]
			}
		]}
		{...props}
	/>;
};
