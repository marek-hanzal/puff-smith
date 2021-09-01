import {ps} from "@/ps";
import {IListProps, List} from "@leight-core/leight";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IListProps<ps.atomizer.AtomizerDto>> {
}

export const AtomizerList: FC<IAtomizerListProps> = () => {
	return <List<ps.atomizer.AtomizerDto>
	>
		{(item) => null}
	</List>;
};
