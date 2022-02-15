import {ITagSelectProps, TagSelect} from "@/puff-smith/site/shared/tag/form/TagSelect";
import {FC} from "react";

export interface IAtomizerTypeSelectProps extends Partial<ITagSelectProps> {
}

export const AtomizerTypeSelect: FC<IAtomizerTypeSelectProps> = props => {
	return <TagSelect groups={['atomizer-type']} allowClear {...props}/>
}
