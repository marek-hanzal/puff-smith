import {ITagSelectProps, TagSelect} from "@/puff-smith/site/shared/tag/form/TagSelect";
import {FC} from "react";

export interface IDrawSelectProps extends Partial<ITagSelectProps> {
}

export const DrawSelect: FC<IDrawSelectProps> = props => {
	return <TagSelect mode={'multiple'} groups={['draw']} allowClear {...props}/>
}
