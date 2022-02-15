import {ITagSelectProps, TagSelect} from "@/puff-smith/site/shared/tag/form/TagSelect";
import {FC} from "react";

export interface ICellTypeSelectProps extends Partial<ITagSelectProps> {
}

export const CellTypeSelect: FC<ICellTypeSelectProps> = props => {
	return <TagSelect mode={'multiple'} groups={['cell-type']} allowClear {...props}/>
}
